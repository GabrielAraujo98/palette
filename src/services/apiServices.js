const apiUrl = process.env.REACT_APP_API_URL;

const apiService = {
    async getUserByEmail(email, password) {
        if(email !== undefined){
            try{
                const response = await fetch(
                    `${apiUrl}/getuserbyemail/`, {
                    method: 'GET',
                    headers: {
                      'email': email,
                      'password': password,
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
    }
}

export default apiService