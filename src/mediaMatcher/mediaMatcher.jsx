import {useState, useEffect} from 'react'

const MatchMediaWrapper = ({mobileContent, desktopContent}) => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false)
    useEffect(() => {
      const mediaWatcher = window.matchMedia("(max-width: 1000px)")
      setIsNarrowScreen(mediaWatcher.matches);
  
      function updateIsNarrowScreen(e) {
        setIsNarrowScreen(e.matches);
      }
      if(mediaWatcher.addEventListener) {
        mediaWatcher.addEventListener('change', updateIsNarrowScreen)
        return function cleanup() {
          mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }
      } else {
        mediaWatcher.addListener(updateIsNarrowScreen)
        return function cleanup() {
          mediaWatcher.removeListener(updateIsNarrowScreen)
        }
      }
    })
  
    return isNarrowScreen ? mobileContent : desktopContent;
  }

  export default MatchMediaWrapper;
