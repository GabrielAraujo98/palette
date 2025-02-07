const apiUrl = process.env.REACT_APP_API_URL;

const apiService = {

    // Users
    async getUserByEmail(email, password) {
        if(email !== undefined){
            try{
                const response = await fetch(
                    `${apiUrl}/getuserbyemail/`, {
                    method: 'GET',
                    headers: {
                      'email': email,
                      password: password,
                      'Content-Type': 'application/json',
                    }
                  })
                  if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                  }
                return await response.json();
            }catch(error){
                console.error('Erro ao buscar usuário:', error);
                throw error;
            }
        }else{
            return console.log('O email é inválido');
        }
    },

    async createUser(user, email, password){
        try{
            const response = await fetch(
                `${apiUrl}/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    user: user,
                    password: password,
                })
              })
              if (!response.ok) {
                throw new Error('Erro ao enviar dados');
              }
            return await response.json();
        }catch(error){
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    },

    // User Palettes

    async createPalette(paletteName, schemeLength, colors, scheme, variation, idOwner){
        try{
            const response = await fetch(
                `${apiUrl}/createuserpalette`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: paletteName,
                    lenghh: schemeLength,
                    colors: colors,
                    scheme: scheme,
                    variation: variation,
                    id_ownder: idOwner,
                })
              })
              if (!response.ok) {
                throw new Error('Erro ao enviar dados');
              }
            return await response.json();
        }catch(error){
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    },

    // Sugested Palette
    async createSugestedPalette(schemeLength, colors, scheme, variation){
        try{
            const response = await fetch(
                `${apiUrl}/createsugestedpalette`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    length: schemeLength,
                    colors: colors,
                    scheme: scheme,
                    variation: variation,
                })
              })
              if (!response.ok) {
                throw new Error('Erro ao enviar dados');
              }
            return await response.json();
        }catch(error){
            console.error('Erro ao criar paleta sugerida:', error);
            throw error;
        }
    },

    async getSugestedPalettes() {
        try{
            const response = await fetch(
                `${apiUrl}/getsugestedpalettes/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                return await response.json();
        }catch(error){
            console.error('Erro ao buscar paletas sugeridas:', error);
            throw error;
        }
    },
}

export default apiService