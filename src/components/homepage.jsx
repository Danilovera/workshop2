import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineSend } from "react-icons/ai";

export default function Homepage() {
  const [products, setProduct] = useState([])

  console.log(products);
  useEffect(()=>{
    axios.get('https://workshop2-etapa2.herokuapp.com/personajes')
    .then(
      res =>{
        setProduct(res.data)
      }
    )
    .catch(err =>{
      console.log("soy error de import" + err);
    })

  },[])
  
  return (
    <div>
     {products.map(data => (
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Link href="#"><AiOutlineHeart/> </Card.Link>
        <Card.Link href="#"><AiOutlineMessage/></Card.Link>
        <Card.Link href="#"><AiOutlineSend/></Card.Link>
      </Card.Body>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.descripcion}
        </Card.Text>
      </Card.Body>
    </Card>))}
  </div>
  );
}
