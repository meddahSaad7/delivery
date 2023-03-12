import React from 'react'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const Container=styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  display: ${props=>props.$showFilter?'fixed':'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 333;
  top: 0;
  left: 0;
`
const Wrapper=styled.div`
  width: 90%;
  height: auto;
  background: white;
  position: relative;
`
const GrClose1=styled(GrClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 50%;
`
const Title=styled.h2`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #cecece;
  padding-left: 30px;
  padding-bottom: 20px;
`
const Casies=styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
`
const Case=styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
const Calandars=styled.div`
  position: absolute;
  z-index: 999;
  display: ${props=>props.$show?'flex':'none'};
  top: 50px;
  right: 10%;
`
const Calendar1=styled(Calendar)`
  
`
const SubTitle=styled.h3`
  margin-left: 10%;
  width: 200px;
`
const Input=styled.input`
  margin-left: 10%;
  width: 300px;
  height: 70%;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
`
const Bottom=styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #cecece;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Button=styled.button`
  width: ${props=>props.$w}px;
  height: ${props=>props.$h}px;
  background: ${props=>props.$bg};
  color: ${props=>props.$c};
  border: none;
  border-radius: 5px;
  margin-right: 20px;
`
function Filter({setIndex,setFilters,showFilter,setShowFilter}) {
  const user = JSON.parse(useSelector((state) => state.user.value));

  const [mousOverCalandar,setMousOverCalandar]=React.useState(false)
  const [creationDate,setCreationDate]=React.useState([])
  const [CalandarState,setCaladarState]=React.useState([
    {
      title:'Liste des filtres',
      show:false,
      startDate:null,
      endDate:null
    },
    {
      title:"Date d'expédition",
      show:false,
      startDate:null,
      endDate:null
    },
    {
      title:'Date statut',
      show:false,
      startDate:null,
      endDate:null
    },
    {
      title:'D. livraison/échec',
      show:false,
      startDate:null,
      endDate:null
    }
  ])
  const onChange=(dates,index)=>{
    setCreationDate(dates)
    const newData=CalandarState.map((data,idx)=>{
      if(index===idx){
        return {
          title:data.title,
          show:false,
          startDate:dates[0],
          endDate:dates[1]
        }
      }
      return data
    })
    setCaladarState(newData)
  }
  const focusFn=(idx)=>{
    const newData=CalandarState.map((data,index)=>{
      if(idx===index){
        return {
          title:data.title,
          show:true,
          startDate:data.startDate,
          endDate:data.endDate
        }
      }
      return {
          title:data.title,
          show:false,
          startDate:data.startDate,
          endDate:data.endDate
        }
    })
    setCaladarState(newData)
  }
  const BlurFn=(idx)=>{
    const newData=CalandarState.map((data,index)=>{
      if(idx===index){
        return {
          title:data.title,
          show:false,
          startDate:data.startDate,
          endDate:data.endDate
        }
      }
      return data
    })
    if(!mousOverCalandar){
      setCaladarState(newData)
    }
  }
  const FilterData=async()=>{
    setIndex(0)
    setFilters(CalandarState)
    setShowFilter(false)
  }
  return (
    <Container $showFilter={showFilter}>
      <Wrapper>
        <Title>Liste des filtres</Title>
        <GrClose1 onClick={()=>setShowFilter(false)}/>
        <Casies>
          {
            CalandarState.map((calandar,index)=>(
              <Case key={index}>
                <SubTitle>{calandar.title}</SubTitle>
                <Input onBlur={()=>BlurFn(index)} onFocus={()=>focusFn(index)} value={(calandar.startDate&&calandar.endDate)?calandar.startDate.getFullYear()+'/'+(calandar.startDate.getMonth()+1)+'/'+(calandar.startDate.getDate())+'  :  '+calandar.endDate.getFullYear()+'/'+(calandar.endDate.getMonth()+1)+'/'+(calandar.endDate.getDate()):''} placeholder='Toutes les dates'/>
                <Calandars $show={calandar.show} onMouseOver={()=>setMousOverCalandar(true)} onMouseOut={()=>setMousOverCalandar(false)}>
                  <Calendar1 
                    onChange={(dates)=>onChange(dates,index)} 
                    selectRange={true}
                    />
                </Calandars>
              </Case>
            ))
          }
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
          <Case>
            <SubTitle>Date de création</SubTitle>
            <Input/>
          </Case>
        </Casies>
        <Bottom>
          <Button onClick={()=>FilterData()} $w={200} $h={30} $bg={'green'} $c={'white'}>Appliquer les filters</Button>
          <Button $w={100} $h={30} $bg={'red'} $c={'white'} onClick={()=>setShowFilter(false)}>Annuler</Button>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Filter