import React from 'react'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    display: ${props=>props.$showFilterByStatus?'fixed':'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 333;
    top: 0;
    left: 0;
`
const Wrapper=styled.div`
    width: 50%;
    height: 30%;
    background: white;
    position: relative;
`
const GrClose1=styled(GrClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 50%;
  color: white;
`
function FilterByStatus({showFilterByStatus,setShowFilterByStatus}) {
  return (
    <Container $showFilterByStatus={showFilterByStatus}>
        <Wrapper>
          <GrClose1 onClick={()=>setShowFilterByStatus(false)}/>
        </Wrapper>
    </Container>
  )
}

export default FilterByStatus