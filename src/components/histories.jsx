import React, { useEffect, useState } from "react";
import axios from "axios";

function Histories() {
  const [products, setProduct] = useState([]);

  console.log(products);
  useEffect(() => {
    axios
      .get("https://workshop2-etapa2.herokuapp.com/historias")
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log("soy error de import" + err);
      });
  }, []);

  return (
    <>
      {products.map(data => (
        <img src={data.img} alt="TopBackground" />
      ))}
    </>
  );
}

export default Histories;
