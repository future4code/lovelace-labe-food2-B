import React from "react"
import { ScreenContainer, SignUpButtonContainer } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"

const LoginPage = () => {
    return (
        <ScreenContainer>
         <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
