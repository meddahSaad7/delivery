import React,{useRef,useState} from 'react'
import styled from 'styled-components'
const Container=styled.div`
  height: 100%;
`
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
function AgenceContent({agencesOfWilaya}) {  
  console.log(agencesOfWilaya)
  const StopDeskId=useRef()
  const Commune=useRef()
  const Center=useRef()
  const Address=useRef()
  const [agences,setAgences]=useState(agencesOfWilaya.agences)
  const Filter=(key)=>{
    if(key===1){
      const newData=agencesOfWilaya.agences.filter((agence,idx)=>{
        if(agence.stopDeskId.includes(StopDeskId.current.value)&&agence.communeId.includes(Commune.current.value)&&agence.name.includes(Center.current.value)&&agence.address.includes(Address.current.value)){
          return agence
        }
      })
      setAgences(newData)
    }
    if(key===2){
      const newData=agencesOfWilaya.agences.filter((agence,idx)=>{
        if(agence.stopDeskId.includes(StopDeskId.current.value)&&agence.communeId.includes(Commune.current.value)&&agence.name.includes(Center.current.value)&&agence.address.includes(Address.current.value)){
          return agence
        }
      })
      setAgences(newData)
    }
    if(key===3){
      const newData=agencesOfWilaya.agences.filter((agence,idx)=>{
        if(agence.stopDeskId.includes(StopDeskId.current.value)&&agence.communeId.includes(Commune.current.value)&&agence.name.includes(Center.current.value)&&agence.address.includes(Address.current.value)){
          return agence
        }
      })
      setAgences(newData)
    }
    if(key===4){
      const newData=agencesOfWilaya.agences.filter((agence,idx)=>{
        if(agence.stopDeskId.includes(StopDeskId.current.value)&&agence.communeId.includes(Commune.current.value)&&agence.name.includes(Center.current.value)&&agence.address.includes(Address.current.value)){
          return agence
        }
      })
      setAgences(newData)
    }
  }
  const Tout=()=>{
    StopDeskId.current.value=''
    Commune.current.value=''
    Center.current.value=''
    Address.current.value=''
    for(let i=1;i<=4;i++){
      Filter(i)
    }
  }
  return (
    <Container>
        {
          <TableContainer>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>stop-desk ID	</TableHeaderCell>
                <TableHeaderCell>commune</TableHeaderCell>
                <TableHeaderCell>Nom du centre	</TableHeaderCell>
                <TableHeaderCell>address</TableHeaderCell>
                <TableHeaderCell>gps</TableHeaderCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell><input onChange={()=>Filter(1)} ref={StopDeskId} placeholder='stop-desk filter'/>	</TableHeaderCell>
                <TableHeaderCell><input onChange={()=>Filter(2)} ref={Commune} placeholder='commune filter'/></TableHeaderCell>
                <TableHeaderCell><input onChange={()=>Filter(3)} ref={Center} placeholder='Nom du centre filter'/></TableHeaderCell>
                <TableHeaderCell><input onChange={()=>Filter(4)} ref={Address} placeholder='address filter'/></TableHeaderCell>
                <TableHeaderCell><button onClick={Tout}>tout</button></TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agences.map((agence, index) => (
                <TableRow key={index}>
                  <TableCell>{agence.stopDeskId}</TableCell>
                  <TableCell>{agence.communeId}</TableCell>
                  <TableCell>{agence.name}</TableCell>
                  <TableCell>{agence.address}</TableCell>
                  <TableCell><a href={`https://www.google.fr/maps/place/${agencesOfWilaya.name}/@${agencesOfWilaya.latitude},${agencesOfWilaya.longitude},9z/data=!3m1!4b1!4m5!3m4!1s0x1288e8d1e7c7243d:0x3e94c576fb531d31!8m2!3d35.4486445!4d2.9072571`}>map</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
        }
    </Container>
  )
}

export default AgenceContent