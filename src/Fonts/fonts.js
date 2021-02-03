import styled, { createGlobalStyle } from "styled-components";
import NunitoBlack from "./Nunito Black/NunitoBlack.woff2";
import RobotoBold from "./Roboto Bold/RobotoBold.woff2";
import NunitoSemiBold from "./Nunito-SemiBold.ttf";
import RobotoRegular from "./Roboto/Roboto.woff2";

export default createGlobalStyle`
@font-face {
    font-family: 'NunitoBlack';
        src: local('Nunito Black'), local('NunitoBlack'),
        url(${NunitoBlack}) format('woff2'); 
}
@font-face {
    font-family: 'RobotoBold';
        src: local('Roboto Bold'), local('RobotoBold'),
        url(${RobotoBold}) format('woff2'); 
}
@font-face {
    font-family: 'NunitoSemiBold';
        src: local('Nunito SemiBold'), local('NunitoSemiBold'),
        url(${NunitoSemiBold}) format('ttf'); 
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    fill: currentColor;
}
body {
    color: ${({ theme }) => (theme ? theme.color : "#666565")};
    background-color: ${({ theme }) =>
      theme
        ? theme.background
        : "linear-gradient(116.22deg, #FBFBFB 26.65%, rgba(251, 251, 251, 0) 84.58%)"};
    transition: all 0.4s ease-in ;
}

@media (min-width:1000px) {
   body {
    max-width: 100rem;
    margin: auto;
   }
}
@font-face {
    font-family: "RobotoRegular";
    src: local('RobotoRegular') , local('RobotoRegular'),
    url(${RobotoRegular}) format('woof2');
}
`;
