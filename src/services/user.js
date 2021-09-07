import axios from "axios";
import {BASE_URL} from "../constants/urls"
import goToHomePage from "../routes/coordinator"


  export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then ((res)=> {
      localStorage.setItem("token", res.data.token)
      clear()
      goToHomePage ()
    })
    .catch ((err)=>alert("Erro no login"))
   }
