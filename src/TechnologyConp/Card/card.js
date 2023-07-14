import React from "react";
import styled from "styled-components"


const Card = (props) => {
    return (
        
        <Div >
           	<Container bcol = {props.bcol}>
                  <Wrapper flex = {props.flex} >
                        <Top>
                                <H1>{props.h1}</H1>
                                <H5>{props.h5}</H5>
                        </Top> 
                        <Bottom>
                                <img src={props.image} alt=""/>
                        </Bottom> 
                  </Wrapper>
                </Container> 
        </Div>

        )
    };
    
    export default Card;   


const Div = styled.div` 
width:  100%;
height: 100%;
/* background-color: gray;*/
display: flex;
justify-content: center;
align-items: center;
`;
const Container = styled.div`
width:  250px;
height:  200px;
background-color: white; 
border-radius: 5px;
border-top: 5px solid ${({bcol}) => bcol} ;
margin: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 90%;
height: 90%;
/* background-color: khaki;  */
display: flex;
flex-direction: ${({flex}) => flex};
justify-content: center;
`;
const Top = styled.div`
width: 100%;
height: 50%;
/* background-color: khaki;  */
display: flex;
flex-direction: column;
justify-content: center;
`;
const Bottom = styled.div`
width: 100%;
height: 50%;
/* background-color: Peru;  */
display: flex;
justify-content: flex-end;

img{
width: 40px;
height: 40px;     
}
`;
const H1 = styled.div`
font-size: 17px;
font-weight: bold;
`;
const H5 = styled.div`
font-size: 12px;
margin-top: 10px;
`;
