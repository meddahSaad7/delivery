import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
   width: 90%;
   height:60px;
   padding-left: 30px;
   display: flex;
   align-items: center;
   margin-bottom: 30px;
   margin-top: 30px;
   background-color: #fff3cd;
`
const H4=styled.h4`
    
`
function Alert({Title=null,value}) {
  return (
    <Container>
        {Title?<H4>{Title}: </H4>:''} {value}
    </Container>
  )
}

export default Alert