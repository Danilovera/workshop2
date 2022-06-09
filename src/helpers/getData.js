const getData = async () => {
  const resp = await fetch("https://workshop2-etapa2.herokuapp.com/historias");
  const data = await resp.json();
  return data;
};

export default getData;
