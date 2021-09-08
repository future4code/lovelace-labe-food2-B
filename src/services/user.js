import axios from "axios";
import {BASE_URL} from "../constants/urls"
import {goToHome} from "../routes/Coordinator"

  export const login = (body, clear, history) => {
    
    const headers = {
      headers: {
        ContentType: "application/json",
      },
    };

    axios.post(`${BASE_URL}/login`, body, headers)
    .then ((res)=> {
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome (history)
      console.log(res.data)
      alert("Login bem sucedido")
    })
    .catch ((err)=> {
      alert("Erro no login")

    })
   }
