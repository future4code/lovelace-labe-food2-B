import React from 'react'
import { LogoImg } from '../LoginPage/styled'
import logoBranca from "../../assets/logoBranca.png"
import { GeneralContainer } from './styled'
import LoginPage from '../LoginPage/LoginPage'
import { black } from 'color-name'


const InitialScreen = () => {
    const [Estado, setEstado] = React.useState(true)
    setTimeout (() => {
        setEstado (false)
    }, 3000)

    return (
        <GeneralContainer style={{background: Estado && "black"}}> 
            {Estado ?  <LogoImg src={logoBranca}/> :  <LoginPage/> }
        </GeneralContainer>
    )
}
export default InitialScreen