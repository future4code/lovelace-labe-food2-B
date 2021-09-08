import React from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { ScreenContainer, InputsContainer, BigContainer, LogoImage } from './styled'
import logo from '../SignUpPage/logo-future-eats-invert.png'
import { Title } from './styled'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '28ch',
    },
}));



const SignUpPage = () => {

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "", passwordconfirm: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp()
    }

    const headers = {

        'Content-Type': 'application/json'
    }

    const SignUp = () => {
        if (form.password !== form.passwordconfirm) {
            alert('As senhas são diferentes')
        } else {
            axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`, form, headers)
                .then((res) => {
                    localStorage.setItem("token", res.data.token)
                    clear()
                })
                .catch((error) => alert("Erro de cadastro do usuário"))
        }

    }

    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <BigContainer>

            <ScreenContainer>

                <form onSubmit={onSubmitForm}>

                    <InputsContainer>

                        <LogoImage src={logo} />

                        <Title>Cadastrar</Title>

                        <TextField
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            label={"Name"}
                            variant={'outlined'}
                            size={'small'}
                            required
                        />

                        <br />

                        <TextField
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            variant={'outlined'}
                            size={'small'}
                            type={"email"}
                            required
                        />

                        <br />

                        <TextField
                            name={"cpf"}
                            value={form.cpf}
                            onChange={onChange}
                            label={"CPF"}
                            variant={'outlined'}
                            size={'small'}
                            required
                        />

                        <br />

                        <FormControl className={clsx(classes.margin, classes.textField)} required fullWidth size={'small'} variant="outlined">

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                            <OutlinedInput
                                name={"password"}
                                type={values.showPassword ? 'text' : 'password'}
                                value={form.password}
                                onChange={onChange}
                                labelWidth={70}

                                endAdornment={

                                    <InputAdornment position="end">

                                        <IconButton

                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"

                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}

                                        </IconButton>

                                    </InputAdornment>
                                }

                            />

                        </FormControl>

                        <br />

                        <div className={classes.root}>

                            <FormControl className={clsx(classes.margin, classes.textField)} required fullWidth size={'small'} variant="outlined">

                                <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>

                                <OutlinedInput
                                    name={"passwordconfirm"}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={form.passwordconfirm}
                                    onChange={onChange}
                                    labelWidth={55}

                                    endAdornment={

                                        <InputAdornment position="end">

                                            <IconButton

                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"

                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}

                                            </IconButton>

                                        </InputAdornment>
                                    }

                                />

                            </FormControl>

                        </div>

                        <br />

                        <Button
                            variant={'contained'}
                            color="primary"
                            size="small"
                            type={"submit"}
                            fullWidth

                        >Criar</Button>

                    </InputsContainer>

                    <br />

                </form>

            </ScreenContainer>

        </BigContainer>
    )

}

export default SignUpPage