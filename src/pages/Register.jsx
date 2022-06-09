import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import styled from "styled-components"
import UseHooks from '../hooks/UseHooks'

const Contenedor = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerRegister = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 30%;
`

const Register = () => {

    let usuarios = "https://workshop2-etapa2.herokuapp.com/usuarios"
   const [data, handleChange,handleReset] = UseHooks({
    name :"",
    password:""
   })

   const handleSumit = (e) => {
     e.preventDefault();

     axios.post(usuarios,data)
      handleReset()
     

   }

  return (
    <Contenedor>
       <ContainerRegister onSubmit={handleSumit}>
         <h1>Registrate aqui</h1>

        <TextField label="Name" color="secondary" focused onChange={handleChange} name="name" value={data.name} />
        <TextField label="password" color="secondary" type="password" focused onChange={handleChange} name="password" value={data.password} />
        <Button variant="contained" type='submit'>Login</Button>
         
       </ContainerRegister>
    </Contenedor>
  )
}

export default Register