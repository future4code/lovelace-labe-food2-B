import axios from 'axios';
import {BASE_URL} from '../constants/urls'
import {goToHome} from '../routes/Coordinator'


  export const login = (body, clear, history) => {
    

    axios.post(`${BASE_URL}/login`, body)
    .then ((res)=> {
      localStorage.setItem('token', res.data.token)
      if(res.data.user.hasAddress) goToHome(history)
      clear()
    })
    .catch ((err)=> {
      alert("Erro no login")

    })
   }
   