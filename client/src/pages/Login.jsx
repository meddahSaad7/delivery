import React,{useState} from 'react'
import Center from '../components/loginComponents/Center';
import styled from 'styled-components';
import Left from '../components/loginComponents/Left';
import Right from '../components/loginComponents/Right';
import { mobile } from '../responseve';
import { useSelector } from 'react-redux';
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
const Wrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.position * -100}vw);
  transition: all 1s ease;
`;
function Login() {
    const state=useSelector(state=>state.user.value)
    const [position,setPosition]=useState(1)
    const Increment=()=>{
        if (position >= 2) {
          setPosition(2);
        }else{
            setPosition(position+1)
        }
    }
    const Decrement=()=>{
        if(position<=0){
            setPosition(0)
        }else{
            setPosition(position-1)
        }
    }
    return (
      <Container>
        <Wrapper position={position}>
          <Left Increment={Increment} />
          <Center Increment={Increment} Decrement={Decrement} />
          <Right Decrement={Decrement} />
        </Wrapper>
      </Container>
    );
}

export default Login
