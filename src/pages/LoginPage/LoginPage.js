import React from "react"
import { ScreenContainer, SignUpButtonContainer } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"

const LoginPage = () => {
    return (
        <ScreenContainer>
            <h2>Entrar</h2>
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
