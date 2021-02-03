import React, { useState } from "react";
import GlobalStyle from "./Fonts/fonts";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import Nav from "./Components/Nav";
import styled from "styled-components";
import About from "./Components/About";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const AppContainer = styled.div`
  margin: 0rem 7% 0rem 7%;
  height: 100vh;
  @media (min-height: 1000px) {
    height: 80vh;
  }
`;
const Title = styled.h2`
  font-family: "NunitoBlack";
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 15%;
  align-items: center;
  transition: all 0.4s ease;
`;
const MainContent = styled.div`
  display: flex;
  height: 65%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7%;
  height: 5%;
  margin: auto;
`;
const DarkToggleButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100rem;
  background: ${({ theme }) => theme.color};
  border: #343030 1px solid;
  :focus {
    outline: 0;
  }
`;
const LightToggleButton = styled(DarkToggleButton)`
  background: ${({ theme }) => theme.background};
`;
function App() {
  const [theme, setTheme] = useState("light");
  const handleDarkTheme = (_) => {
    setTheme("dark");
  };
  const handleLightTheme = (_) => {
    setTheme("light");
    console.log("change theme");
  };
  return (
    <AppContainer>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Header>
            <Title className="text-2xl">
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
          <ButtonContainer>
            <LightToggleButton onClick={(_) => handleLightTheme()} />
            <DarkToggleButton onClick={(_) => handleDarkTheme()} />
          </ButtonContainer>
          <Footer />
        </ThemeProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
