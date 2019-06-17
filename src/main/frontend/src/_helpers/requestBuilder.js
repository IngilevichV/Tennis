const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  
export const buildHeaders = () => {
    const authToken = localStorage.getItem('TOKEN');

    return { ...defaultHeaders, Authorization: authToken }
  }