import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import axios from 'axios'
import Retour from '../retulisable/Retour'
import Alert from '../retulisable/Alert'
import { useDispatch } from 'react-redux'
import Loading from '../retulisable/Loading'
import { loading } from '../features/action'
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
`
const Wrapper=styled.div`
    margin-top: 60px;
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color:${props=>props.$background};
`
const Top=styled.div`
    flex: .5;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title=styled.h2`
    margin-left: 30px;
`
// const Button=styled.button`
//     margin-right: 30px;
//     padding: 10px 30px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-size: 25px;
//     background: #a61e22;
//     color: white;
//     border: none;
// `
const Center=styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #bbbbbb;
`
const Bottom=styled.div`
    flex: .5;
`
// const Alert=styled.div`
//     width: 90%;
//     height: 30%;
//     background:#f8d7da;
//     border-radius: 10px;
// `
const SelectInput=styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
`
const Text=styled.p`
    
`
const InputContainer=styled.div`
    width: 60%;
    height: 40px;
    display: flex;
    border: 1px solid #bbbbbb;
`
const Input=styled.input`
    flex: 3;
    outline: none;
    border: none;
`
const Submit=styled.button`
    flex: 1;
    border: none;
    :hover{
        background: #a61e22;
        color: white;
    }
`
const TextBottom=styled.p`
    margin-left: 30px;
`
function Status() {
    const dispatch=useDispatch()
    const [background,setBackground]=useState('white')
    const traking=useRef()
    const audio=useRef()
    const audioReject=useRef()
    const EditStatus=async()=>{
        dispatch(loading(true))
        try{
            const res=await axios.get(`http://localhost:3001/server/package/EditStatus/${traking.current.value}`)
            if(res.data){
                audio.current.play()
                setBackground('#4dff91')
                dispatch(loading(false))
            }else{
                audioReject.current.play()
                setBackground('#e9581f')
                dispatch(loading(false))
            }
            
        }catch(err){
            console.log(err)
            dispatch(loading(false))
        }
    }
    return (
        <Container>
                <audio src="/sonds/valid.mp3" ref={audio} />
                <audio src="/sonds/reject.mp3" ref={audioReject} />
                <Wrapper $background={background}>
                    <Top>
                        <Retour title={'Mettre en prêt à expédier'}/>
                    </Top>
                    <Center>
                        {/* <Alert>
                            <Title>IMPORTANT</Title>
                            <Text>Quand vous mettez un colis en prêt à expédier, vous n'aurez plus la possiblité de le modifier ou de le supprimer.</Text>
                        </Alert> */}
                        <Alert Title={'IMPORTANT'} value={"Quand vous mettez un colis en prêt à expédier, vous n'aurez plus la possiblité de le modifier ou de le supprimer."}/>
                        <SelectInput>
                            <Text>Selectionnez d'abord les colis</Text>
                            <InputContainer>
                                <Input ref={traking}/>
                                <Submit onClick={()=>EditStatus()}>ajouter à la liste</Submit>
                            </InputContainer>
                        </SelectInput>
                    </Center>
                    <Bottom>
                        <TextBottom>Les colis selectionnés : (0/0)</TextBottom>
                    </Bottom>
                </Wrapper>
        </Container>
    )
}

export default Status