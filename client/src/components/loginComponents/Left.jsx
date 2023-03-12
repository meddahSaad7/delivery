import React, { useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { AiOutlineRight } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { mobile } from "../../responseve";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import { loading } from "../../features/action";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef8f5;
  position: relative;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${mobile({
    width: "100%",
    height: "100%",
  })}
`;
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
  ${mobile({
    flexDirection: "column",
  })}
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
  display: flex;
  flex-direction: column;
`;
const ToRight = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  right: 20px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px #e4e4e4;
`;
const Logo = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({
    justifyContent: "center",
  })}
`;
const Img = styled.img`
  width: 70%;
  height: 50%;
`;
const Form = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
`;
const AiOutlineRight1 = styled(AiOutlineRight)`
  font-size: 25px;
  font-weight: bold;
  color: gray;
`;
//form
const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    height: "auto",
    flexDirection: "column",
  })}
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
  ${mobile({
    width: "83%",
  })}
`;
const InputCont = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  padding: 5px;
  ${mobile({
    width: "85%",
  })}
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

const Errors = styled.div`
  height: auto;
  position: relative;
`;
const Error = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: red;
  opacity: calc(0.5);
  padding: 5px;
  border-radius: 10px;
`;
const GrClose1 = styled(GrClose)`
  position: absolute;
  right: 0;
  top: -25px;
  border-radius: 50%;
  padding: 3px;
  background-color: red;
`;
function Left({ Increment }) {
  const [errors, setErrors] = useState([]);
  const email = useRef();
  const password = useRef();
  const deliveryData = require("../../lottieFiles/delivery.json");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    dispatch(loading(true))
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    await axios
      .post(`http://localhost:3001/server/auth/login`, user, {
        withCredentials: true,
      }).then((res)=>{
        console.log(res)
        if(res.data!=='user not found'){
          setTimeout(()=>{
            dispatch(loading(false))
          },2000)
          dispatch(login(res.data));
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch(loading(false))
        setErrors(err.response?.data);
      });
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <TopWrapper>Delivery</TopWrapper>
        <LeftRightWrapper>
          <LeftWrapper>
            <Lottie width={300} animationData={deliveryData} />
          </LeftWrapper>
          <RightWrapper>
            <Logo>
              <Img src="/images/logo.png" />
              {errors?.length > 0 && (
                <Errors>
                  <GrClose1
                    style={{ color: "white" }}
                    onClick={() => setErrors([])}
                  />
                  {errors.map((err, idx) => (
                    <Error>{err}</Error>
                  ))}
                </Errors>
              )}
            </Logo>

            <Form>
              <InputContainer>
                <Label>Email Adress</Label>
                <InputCont>
                  <MdMarkEmailUnread1 />
                  <Input
                    onChange={() => setErrors([])}
                    type="email"
                    ref={email}
                    placeholder="Enter your email address"
                  />
                </InputCont>
              </InputContainer>
              <InputContainer>
                <Label>Password</Label>
                <InputCont>
                  <RiLockPasswordFill1 />
                  <Input
                    onChange={() => setErrors([])}
                    type="password"
                    ref={password}
                    placeholder="Enter your password"
                  />
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
                  <Submit onClick={() => handleClick()}>Login</Submit>
                </SubmitCont>
              </InputContainer>
            </Form>
          </RightWrapper>
        </LeftRightWrapper>
      </Wrapper>
      <ToRight onClick={Increment}>
        <AiOutlineRight1 />
      </ToRight>
    </Container>
  );
}
export default Left;
