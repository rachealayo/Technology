import React from "react"
import styled from "styled-components"
import Card from "../Card/card"


const Home = (props) => {
    return (

        <App>
            <Wrap>
                <Top>
                        <H1>Reliable, Efficient Delivery</H1>
                        <H4>Powered by Technology</H4>
                        <H6>Our artificial intelligence powered tools <br/>
                        use millions of project data points to ensure that your project is successful.</H6>
                </Top>

                <Bottom>
                        <Left>
                                <Card   bcol = "green"  h1 = "Supervisor" h5 = "Monitors activities to identify roadblocks" image = "/search.png"/>
                        </Left>
                        <Middle>
                                <Card   bcol = "red"  h1 = "Calculator" h5 = "Uses data from past projects to provide better delivery estimates" image = "/free-add-to-cart.png"/>
                                <Card  bcol = "yellow"  h1 = "Team Builder" h5 = "Scans our talent network to create the optimal team for your project" image = "/search-plus.png"/>
                        </Middle>
                        <Right>
                        <Card  bcol = "blue"  h1 = "Karma" h5 = "Regularly evaluate our talent to ensure quality" image = "/call.png"/>
                        </Right>
                </Bottom>
            </Wrap>
        </App>

    )
};

export default Home;


const App = styled.div`
width:  100%;
height: 100vh;
color: Black;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap = styled.div` 
width: 90%;
height: 100%;
/* background-color: goldenrod; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Top = styled.div` 
width: 100%;
height: 30%;
text-align: center;
/* background-color: khaki; */
`;
const H1 = styled.div`
font-size: 30px;
margin-top: 10px;
`;
const H4 = styled.div`
font-size: 20px;
font-weight: bold;
margin-top: 20px;
`;
const H6 = styled.div`
font-size: 12px;
margin-top: 30px;
`;
const Bottom = styled.div` 
width: 100%;
height: 70%;
margin: 10px;
/* background-color: peru; */
display: flex;
justify-content: space-between;
/* align-items: center; */
`;
const Left= styled.div` 
width: 33%;
height: 100%;
/* background-color: peru; */
display: flex;
justify-content: center;
align-items: center;
`;
const Middle= styled.div` 
width: 33%;
height: 100%;
/* background-color: khaki; */
display: flex;
flex-direction: column;
justify-content: center;
`;
const Right = styled.div` 
width: 33%;
height: 100%;
/* background-color: peru; */
display: flex;
justify-content: center;
align-items: center;
`;