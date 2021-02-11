import React from "react";
import GlobalStyle from "./Fonts/fonts";
// import { lightTheme, darkTheme } from "./Themes";
import Nav from "./Components/Nav";
import styled from "styled-components";
import About from "./Components/About";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

export const AppContainer = styled.div`
  margin: 0rem 5% 0rem 5%;
  height: 100vh;
`;
const Title = styled.h2`
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
`;
const MainContent = styled.div`
  display: flex;
  height: 70%;
`;
// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 5rem;
//   margin: auto;
// `;
// const DarkToggleButton = styled.button`
//   width: 1.5rem;
//   height: 1.5rem;
//   border-radius: 100rem;
//   background: ${({ theme }) => theme.background};
//   border: #343030 1px solid;
//   :focus {
//     outline: 0;
//   }
// `;
// const LightToggleButton = styled(DarkToggleButton)`
//   background: ${({ theme }) => theme.color};
// `;
function App() {
  // const [theme, setTheme] = useState("light");
  // const handleDarkTheme = () => {
  //   setTheme("dark");
  // };
  // const handleLightTheme = () => {
  //   setTheme("light");
  // };
  return (
    <AppContainer>
      <Router>
        <GlobalStyle />
        <Header className="flex-col md:flex-row justify-around md:justify-between">
          <Title className="text-2xl md:text-3xl font-nunitoBold font-black">
            <Link to="/">din</Link>
          </Title>
          <Nav />
        </Header>
        <Switch>
          <MainContent>
            <Route exact path="/" component={About} />
            <Route exact path="/Works" component={Works} />
          </MainContent>
        </Switch>
        {/* <ButtonContainer className="flex flex-col absolute top-0 right-10">
            <LightToggleButton onClick={() => handleLightTheme()} />
            <DarkToggleButton onClick={() => handleDarkTheme()} />
          </ButtonContainer> */}
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
