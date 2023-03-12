import axios from 'axios';
import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {loading} from '../features/action'
import PopUp from '../retulisable/PopUp'
import AgenceContent from '../contents/AgenceContent'
const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f3f2f2;
`;
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.thead`
  background-color: #333;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ddd;
  }
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #333;
`;

const TableBody = styled.tbody`
  & td {
    padding: 10px;
    border: 1px solid #333;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #333;
`;
function OurAgencies() {
  const dispatch=useDispatch()
  const [agences,setAgences]=useState([])
  const [showPopUp,setShowPopUp]=useState(false)
  const [agencesOfWilaya,setAgencesOfWilaya]=useState([])
  useEffect(()=>{
    const getWilaya=async()=>{
      dispatch(loading(true))
      try{
        const res=await axios.get('http://localhost:3001/server/location/wilayas')
        dispatch(loading(false))
        setAgences(res.data)
      }catch(err){
        dispatch(loading(false))
        console.log(err)
      }
    }
    getWilaya()
  },[])
  const handleClick=(item)=>{
    setShowPopUp(true)
    setAgencesOfWilaya(item)
  }
  return (
    <Container>
      {
        showPopUp&&<PopUp width={80} height={60} content={<AgenceContent agencesOfWilaya={agencesOfWilaya}/>} close={()=>setShowPopUp()}/>
      }
        <Wrapper>
          <TableContainer>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Wilaya	</TableHeaderCell>
                <TableHeaderCell>Nombre de centre</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agences.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.agences.length}</TableCell>
                  <TableCell><button onClick={()=>{handleClick(item)}}>Afficher</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
        </Wrapper>
    </Container>
  );
}

export default OurAgencies