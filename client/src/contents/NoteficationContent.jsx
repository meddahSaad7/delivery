import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Alert from '../retulisable/Alert'
const Container=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Top=styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #cacaca;
`
const Bottom=styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button1=styled(Button)`
    margin-left:10px;
`
function NoteficationContent() {
  return (
    <Container>
        <Top>
            Notifications: <Button1>Toutes</Button1> <Button1>Non lues</Button1> <Button1>Lues</Button1>
        </Top>
        <Bottom>
            <Alert value={"Vous n'avez pas d'autres notifications à afficher"}/>
        </Bottom>
    </Container>
  )
}

export default NoteficationContent