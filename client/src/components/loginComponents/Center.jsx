import React from 'react'
import styled from "styled-components";
import Lottie from "lottie-react";
import { mobile } from '../../responseve';
import { useSelector } from 'react-redux';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef8f5;
  ${mobile({
    background:'white'
  })}
`;

const Wrapper = styled.div`
  width: 50%;
  height: 65%;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${mobile({
    width:'100%',
    height:'90%',
    marginBottom:'15%'
  })}
`;
const Top = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Logo = styled.img`
  width: 70%;
  height: 70%;
`;
const LeftRight = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection:'column',
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #fef8f5;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #fef8f5;
`;
const Title = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;
const LottieContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Center({ Increment, Decrement }) {
  const deliveryData = require("../../lottieFiles/delivery.json");
  const senderData = require("../../lottieFiles/sender.json");
  const state=useSelector((state)=>state.user.value)
  console.log(state)
  return (
    <Container>
      <Wrapper>
        <Top>
          <Logo src="/images/logo.png" />
        </Top>
        <LeftRight>
          <Left onClick={Decrement}>
            <Title>Delivery</Title>
            <LottieContainer>
              <Lottie animationData={deliveryData} />
            </LottieContainer>
          </Left>
          <Right onClick={Increment}>
            <Title>Sender</Title>
            <LottieContainer>
              <Lottie animationData={senderData} />
            </LottieContainer>
          </Right>
        </LeftRight>
      </Wrapper>
    </Container>
  );
}

export default Center