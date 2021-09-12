import React from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { AdressContainer, InfoContainer, ScreenContainer } from "./styled";
import useRequestData from "../../hooks/UseRequestData";
import { BASE_URL } from "../../constants/urls";
import userEvent from "@testing-library/user-event";

const ProfilePage = () => {
  // const history = useHistory();
  const profile = useRequestData([], `${BASE_URL}/profile`);
  
  

  return (
    <ScreenContainer>
      <div>Insira aqui um HEADER</div>
      <InfoContainer>
        <p>{profile?.user?.name}</p>
        <p>{profile?.user?.email}</p>
        <p>{profile?.user?.cpf}</p>
      </InfoContainer>
      <AdressContainer>
        <p>Endereço cadastrado:</p>
        <p>{profile?.user?.hasAddress ? profile?.user?.address : 'Endereço não cadastrado'}</p>
      </AdressContainer>
      <p>Histórico de pedidos</p>
      <OrderCard/>
    </ScreenContainer>
  );
};
export default ProfilePage;
