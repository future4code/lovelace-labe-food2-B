import React from "react";
import { InputsContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import {useHistory} from "react-router-dom"


const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault();
    login (form, clear, history)
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"email@email.com"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Mínimo 6 caracteres"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Entrar
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;