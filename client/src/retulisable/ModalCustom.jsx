import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width: 90%;
    height: auto;
    padding-left: 10px;
    background-color: ${props=>props.bg};
    margin-bottom: 10px;
    border-radius: 5px;
`
const Title=styled.h2`

`
const Text=styled.p`
    padding-right: 10px;
`
const Button=styled.button`
    background: ${props=>props.bg};
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    color: white;
    border-radius: 5px;
`
function ModalCustom({onClickFn,title,text,textBtn,background,backgroundBtn}) {
  return (
    <Container bg={background}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button bg={backgroundBtn} onClick={onClickFn}>{textBtn}</Button>
    </Container>
  )
}

export default ModalCustom