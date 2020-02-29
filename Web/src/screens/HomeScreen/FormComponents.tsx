import React from "react"
import { TextField } from "@material-ui/core"

export const CreateAccountForm:React.FC = ({}) => {
    return (
        <>
         <TextField id="standard-basic" label="Nome" fullWidth/>
         <TextField
          id="standard-helperText"
          label="Usuário"
          helperText="O usuário não deve conter espaços ou caracteres especiais"
          fullWidth
        />
        <TextField id="standard-basic" label="Email"  fullWidth/>
        </>
    )
}

export const AddPasswordForm:React.FC = ({}) => {
    return (
        <>
        <TextField
          id="standard-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        <TextField
          id="standard-password-input"
          label="Confirmar senha"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        </>
    )
}

export const AddPhoneNumberForm:React.FC = ({}) => {
    return (
        <>
        <TextField id="standard-basic phoneNumber" label="Celular" fullWidth/>
        </>
    )
}

export const AddBirthdayForm:React.FC = ({}) => {
    return (
        <>
        <TextField id="standard-basic" label="Data de Nascimento" fullWidth/>
        </>
    )
}

export const AddGitandJobForm:React.FC = ({}) => {
    return (
        <>
        <TextField id="standard-basic" label="Usuário do GitHub" fullWidth/>
        <TextField id="standard-basic" label="Cargo" fullWidth/>
        </>
    )

}