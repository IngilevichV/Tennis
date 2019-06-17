export default class AuthService {
    constructor(domain) {
      this.domain = domain || 'http://localhost:3000'
      this.fetch = this.fetch.bind(this)
      this.login = this.login.bind(this)
      this.getProfile = this.getProfile.bind(this)
    }
  
    login(email, password) {
        this.setProfile({email,password})
    //   return this.fetch('/api/token', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email,
    //       password
    //     })
    //   }).then(res => {
    //     this.setToken(res.id_token);
    //     return this.fetch('/api/user', {
    //       method: 'GET'
    //     })
    //   }).then(res => {
    //     this.setProfile(res);
    //     return Promise.resolve(res)
    //   })
    }
  
    loggedIn(){
      const token = this.getToken();
      return !!token // handwaiving here
    }
  
    setProfile(profile){
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  
    getProfile(){
      const profile = localStorage.getItem('profile');
      return profile ? JSON.parse(localStorage.profile) : {}
    }
  
    setToken(idToken){;
      localStorage.setItem('id_token', idToken)
    }
  
    getToken(){;
      return localStorage.getItem('id_token')
    }
  
    logout(){;
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
    }
  
    _checkStatus(response) {;
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }
  
    fetch(url, options){
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  
      if (this.loggedIn()){
        headers['Authorization'] = 'Bearer ' + this.getToken()
      }
  
      return fetch(url, {
        headers,
        ...options
      })
      .then(this._checkStatus)
      .then(response => response.json())
    }
  }