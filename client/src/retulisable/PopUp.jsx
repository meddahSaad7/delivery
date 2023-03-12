import React from 'react'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(182, 182, 182, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
const Wrapper=styled.div`
  width: ${props=>props.$w}vw;
  height: ${props=>props.$h}vh;
  background:white;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`
const GrClose1=styled(GrClose)`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px;
  border-radius: 50%;
  color: black;
`
function PopUp({width,height,content,close}) {
  return (
    <Container>
      <Wrapper $w={width} $h={height}>
        <GrClose1 onClick={()=>close(false)}/>
        {content}
      </Wrapper>
    </Container>
  )
}
export default PopUp