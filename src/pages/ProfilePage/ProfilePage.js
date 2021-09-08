import React from 'react'
import { AdressContainer, InfoContainer, Profile } from './styled'

 const ProfilePage = () => {
    return (
        <Profile>
            <InfoContainer>
                Nome: Maisa
                E-mail: jhfuihf@gmail.com
                CPF: 000.000.000-00
            </InfoContainer>
            <AdressContainer>
                Endereço cadastrado:
                Rua do Astronauta Perdidão, 0 - Labenu- MG
            </AdressContainer>
            <div>
                Histórico de pedidos
                {/* aqui onde vai ter os cards dos components */}
            </div>
        </Profile>
    )
}
export default ProfilePage