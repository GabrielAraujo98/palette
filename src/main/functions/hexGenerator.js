export function hexGenerator() {
    var button = document.getElementById('refresh')

    if (button) {
        button.addEventListener('click', function getRandomHex() {
            var hexCode = []
            for (var h = 0; h < 3; h++) {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                hexCode.push(color)
            }
            console.log(hexCode);
            // return hexCode;
        })
    }
}
// export function getRandomHex() {
//     var hexCode = []
//     for (var h = 0; h < 3; h++) {
//         var letters = '0123456789ABCDEF'.split('');
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         hexCode.push(color)
//     }
//     console.log(hexCode);
//     // return hexCode;
// }
