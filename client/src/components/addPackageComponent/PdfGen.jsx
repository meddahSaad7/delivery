import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {MdOutlineCancel} from 'react-icons/md'
import QrCodeGen from '../QrCodeGen'
import PdfFile from '../../PdfFile'
import { useNavigate } from 'react-router'
import axios from 'axios'
import {GrClose} from 'react-icons/gr'

import { PDFDownloadLink } from '@react-pdf/renderer'
const Container=styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper=styled.div`
  width: 40%;
  height: 90%;
  background-color: white;
  padding: 0px 30px 0px 30px;
  position: relative;
`
const Top=styled.div`
  border-bottom: 1px solid #d6c6c6;
`
const Center=styled.div`
  border-bottom: 1px solid #d6c6c6;
`
const Bottom=styled.div`
  border-bottom: 1px solid #d6c6c6;
`
const ButtonCont=styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
`
const Title=styled.h2`

`
const MinTitle=styled.h3`
  
`
const MdOutlineCancel1 = styled(MdOutlineCancel)`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 30px;
  color: white;
`;
const Button=styled.button`
  padding: 30px;
  background-color: red;
`
const GrClose1=styled(GrClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 50%;
  color: white;
`
function PdfGen({packageId ,Import ,setNewPackage}) {
  const navigate=useNavigate()
  const handleClick = () => {
    navigate('/package');
    setNewPackage(null);
  };
  const [Package,setPackage]=useState()
  const [status,setStatus]=useState(null)
  useEffect(()=>{
    const getProduct= async()=>{
      "use strict";
      try{
        const res=await axios.get(`http://localhost:3001/server/package/getPackage/${packageId}`)
        setPackage(res.data)
        setStatus(res.status)
        console.log(Package,'data..........')
      }catch(err){
        console.log(err)
      }
    }
    getProduct()
  },[status])
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>Détails du colis: {Package?.Traking}</Title>
        </Top>
        <Center>
          <MinTitle>Date de création: {Package?.createdAt}</MinTitle>
          <MinTitle>Pour: {Package?.BuyerLastName+' '+Package?.BuyerFirstName}</MinTitle>
          <MinTitle>Départ: {Package?.AgenceWilaya+' vers '+Package?.Wilaya+' ('+Package?.Adress+ ',' +Package?.Commune+') '}</MinTitle> 
        </Center>
        <Bottom>
          <MinTitle>#commande: {Package?.NumCommunde}</MinTitle>
          <MinTitle>Désignation: {Package?.Products}</MinTitle>
          <MinTitle>Prix: {Package?.PackagePrice}</MinTitle>
          <MinTitle>Frais de livraison: {Package?.PriceDelivery}</MinTitle>
          <MinTitle>Livraison gratuite: {Package?.freeDelivery?'oui':'non'}</MinTitle>
        </Bottom>
        <ButtonCont>
          <GrClose1 onClick={handleClick} />
          <PDFDownloadLink
            document={<PdfFile str={packageId} />}
            fileName={"FORM"}
          >
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
        </ButtonCont>
      </Wrapper>
      
      {/* <PdfFile /> */}
    </Container>
  );
}

export default PdfGen