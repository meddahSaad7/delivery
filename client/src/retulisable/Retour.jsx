import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
  border-bottom: 1px solid #cecece;
`
const Return = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  margin-right: 20px;
  font-size: 25px;
  background-color: #a61e22;
  border: none;
  color: white;
`;
const Title=styled.h4`
  margin-left: 30px;
`
function Retour({title}) {
    const navigate=useNavigate()
  return (
    <Container>
        <Title>{title}</Title>
        <Return onClick={() => navigate("/Package")}>
          <BsArrowLeft />
          Retour
        </Return>
    </Container>
  )
}

export default Retour