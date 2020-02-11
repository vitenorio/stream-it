    export const saveCredentials = (token: string) => {
        window.localStorage.setItem('token', token)
    }
  
  export const getToken = () => window.localStorage.getItem('token')
  
  export const clearStorage = () => window.localStorage.clear()