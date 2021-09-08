import React from "react"
import { LogoImg, ScreenContainer, SignUpButtonContainer, Text } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import logo from "../../assets/logo.png"

const LoginPage = () => {
    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            {/* <Text>Entrar</Text> */}
         <LoginForm/>
            <SignUpButtonContainer>
                <Button
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
