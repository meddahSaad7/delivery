import React from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef8f5;
  position: relative;
`;
const Wrapper=styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    background-color: white;
`
const TopWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 2px solid #fef8f5;
`;
const LeftRightWrapper = styled.div`
  flex: 4;
  display: flex;
`;
const LeftWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #fef8f5;
`;
const RightWrapper = styled.div`
  flex: 4;
`;
const ToLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: 20px;
  top: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px #e4e4e4
`;
const AiOutlineLeft1 = styled(AiOutlineLeft)`
  color: gray;
  font-size: 25px;
  font-weight: bold;
`
const Form = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
`;
const Logo = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Img = styled.img`
  width: 70%;
  height: 50%;
`;
const AiOutlineRight1 = styled(AiOutlineRight)`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;
//form
const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Label = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
`;
const InputCont = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  padding: 5px;
`;
const MdMarkEmailUnread1 = styled(MdMarkEmailUnread)`
  font-size: 25px;
  font-weight: bold;
  border-right: 1.5px solid gray;
  padding-right: 5px;
  color: gray;
`;
const RiLockPasswordFill1 = styled(RiLockPasswordFill)`
  font-size: 25px;
  font-weight: bold;
  border-right: 1.5px solid gray;
  padding-right: 5px;
  color: gray;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 5px;
`;
const Remember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 52%;
  margin-left: 22%;
`;
const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: white;
  cursor: pointer;
`;
const ForgotP = styled.div`
  color: #00aedb;
  cursor: pointer;
`;
const SubmitCont = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Submit = styled.button`
  padding: 7px 25px;
  background-color: #0075ff;
  border: none;
  color: white;
`;
function Right({ Decrement }) {
    const senderData=require('../../lottieFiles/sender.json')
    return (
      <Container>
        <Wrapper>
          <TopWrapper>Sender</TopWrapper>
          <LeftRightWrapper>
            <LeftWrapper>
              <Lottie animationData={senderData} />
            </LeftWrapper>
            <RightWrapper>
              <Logo>
                <Img src="/images/logo.png" />
              </Logo>
              <Form>
                <InputContainer>
                  <Label>Email Adress</Label>
                  <InputCont>
                    <MdMarkEmailUnread1 />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </InputCont>
                </InputContainer>
                <InputContainer>
                  <Label>Password</Label>
                  <InputCont>
                    <RiLockPasswordFill1 />
                    <Input type="password" placeholder="Enter your password"/>
                  </InputCont>
                </InputContainer>
                <InputContainer>
                  <Remember>
                    <CheckContainer>
                      <CheckBox type="checkbox" />
                      Remember me
                    </CheckContainer>
                    <ForgotP>Forgot password?</ForgotP>
                  </Remember>
                </InputContainer>
                <InputContainer>
                  <SubmitCont>
                    <Submit>Login</Submit>
                  </SubmitCont>
                </InputContainer>
              </Form>
            </RightWrapper>
          </LeftRightWrapper>
        </Wrapper>
        <ToLeft onClick={Decrement}>
          <AiOutlineLeft1 />
        </ToLeft>
      </Container>
    );
}

export default Right