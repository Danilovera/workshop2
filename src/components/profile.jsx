import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [products, setProduct] = useState([]);

  console.log(products);
  useEffect(() => {
    axios
      .get("https://workshop2-etapa2.herokuapp.com/personajes")
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log("soy error de import" + err);
      });
  }, []);

  return (
    <>
      <img
        style={{
          display: "flex",
          position: "sticky",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
        src="https://res.cloudinary.com/dixwwvzbt/image/upload/v1654802317/workshop2/Group_14_ululmd.png"
        alt="TopBackground"
      />
      <img
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "47%",
          top: "28%",
        }}
        src="https://res.cloudinary.com/dixwwvzbt/image/upload/v1654802318/workshop2/Group_3_luyqqp.png"
        alt="TopBackground"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5% 7%",
        }}
      >
        <span>
          <h5>10.7 M</h5>
          <h6>Followers</h6>
        </span>
        <span>
          <h5>108.3 M</h5>
          <h6>Likes</h6>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "3% 0",
        }}
      >
        <h3
          style={{
            margin: "1% 0",
          }}
        >
          Jennie Kim
        </h3>
        <h5
          style={{
            margin: "1% 0",
          }}
        >
          J. Hello Guys
        </h5>
        <h6
          style={{
            margin: "1% 0",
          }}
        >
          Follow me and like my post
        </h6>
      </div>
      <div>
        <button
          style={{
            background: "#FF7674",
          }}
        >
          Follow
        </button>
        <button
          style={{
            background: "#FF7674",
          }}
        >
          Follow
        </button>
      </div>
    </>
  );
}

export default Profile;
