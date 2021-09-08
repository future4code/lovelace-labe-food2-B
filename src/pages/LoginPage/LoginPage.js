import React from "react"
import { LogoImg, ScreenContainer, SignUpButtonContainer, Text } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import logo from "../../assets/logo.png"
import { goToSignUp } from "../../routes/Coordinator"
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            {/* <Text>Entrar</Text> */}
         <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp (history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"inherit"}
                >
                    Não possui cadastro? Clique aqui
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
