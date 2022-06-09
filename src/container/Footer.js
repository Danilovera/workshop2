import React from 'react'
import { FooterDiv, Lista, Ulfooter } from '../style/Footer'
import { AiOutlineHome, AiOutlineSearch , AiOutlineBell } from "react-icons/ai";
import {  BsPerson } from "react-icons/bs";
import {HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <FooterDiv>
      <Ulfooter>
      <Lista><Link style={{color: "white"}} to='/'> <AiOutlineHome/></Link> </Lista>
      <Lista><Link  style={{color: "white"}} to='/Buscar'> <AiOutlineSearch/></Link></Lista>
      <Lista><Link style={{color: "white"}} to='/Add'> <HiPlus/></Link></Lista>
      <Lista><Link style={{color: "white"}} to='/Notifi'> <AiOutlineBell/> </Link></Lista>
      <Lista><Link style={{color: "white"}} to='/Profile'> <BsPerson/></Link></Lista>
      </Ulfooter>
      </FooterDiv>
    </div>
  )
}
