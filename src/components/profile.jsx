import React from "react";
import getData from "../helpers/getData";

function Profile() {
  const { data } = getData;
  console.log(data);
  return (
    <>
      <img alt="TopBackground" />
    </>
  );
}

export default Profile;
