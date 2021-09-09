import React from "react";
import Card from "../../components/OrderCard/OrderCard";
import {
  AdressContainer,
  InfoContainer,
  ScreenContainer,
} from "./styled";


const ProfilePage = () => {
  return (
    <ScreenContainer>
        <div>
            Insira aqui um HEADER
        </div>
      <InfoContainer>
        <p>Nome: Maisa</p>
        <p>E-mail: jhfuihf@gmail.com</p>
        <p>CPF: 000.000.000-00</p>
      </InfoContainer>
      <AdressContainer>
        <p>Endereço cadastrado:</p>
        <p>Rua do Astronauta Perdidão, 0 - Labenu- MG</p>
      </AdressContainer>
      <p>
        Histórico de pedidos
      </p>
      <Card></Card>
    </ScreenContainer>
  );
};
export default ProfilePage;
