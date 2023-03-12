import React from 'react'
import styled from 'styled-components'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import Lottie from "lottie-react";

const Container=styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(154, 153, 153, 0.5);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 9999;
`
const LottieContainer=styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
`
function Loading() {
    const loadingData=require('../lottieFiles/loading.json')
    return (
        <Container>
            <LottieContainer>
                <Lottie animationData={loadingData}/>
            </LottieContainer>
        </Container>
    )
}

export default Loading