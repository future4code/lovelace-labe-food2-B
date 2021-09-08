import React from 'react'
import { LogoImg } from '../LoginPage/styled'
import logoBranca from "../../assets/logoBranca.png"
import { GeneralContainer } from './styled'


const HomePage = () => {
    return (
        <GeneralContainer> 
         <LogoImg src={logoBranca} />
        </GeneralContainer>
    )
}
export default HomePage


