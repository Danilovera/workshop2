import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 40%;
`;

const Login = () => {

    const FindDatos = async(e) =>{ 
        e.preventDefault()
        
        getData()
        
    }
    const url = "https://workshop2-etapa2.herokuapp.com/usuarios"
    const  getData =async(url) =>{

        let resp = await fetch(url)
        let data = await resp.json()

        console.log(data)
    }

  return (
    <Contenedor>
      <Flex onSubmit={FindDatos}>
          <h1>Login</h1>
        <TextField label="Name" color="secondary" focused />
        <TextField label="password" color="secondary" type="password" focused />
        <Button variant="contained" type="submit">Login</Button>
        <p>No tienes una cuenta aun ? Registrate <Link to="/Register"> aqui</Link> </p>
      </Flex>
    </Contenedor>
  );
};

export default Login;
