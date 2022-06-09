import { createGlobalStyle } from "styled-components";


function App() {

  const GlobalStyled = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  `
  return (
    <div className="App">
    <GlobalStyled />
    
    </div>
  );
}

export default App;
