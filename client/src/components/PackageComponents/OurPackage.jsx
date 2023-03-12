import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import PackageItem from './PackageItem';
import {GrAddCircle} from 'react-icons/gr';
import CopyToClipboard from "react-copy-to-clipboard"; 
import {IoIosCopy} from 'react-icons/io';
import {FaFileExport} from 'react-icons/fa';
import PdfGen from '../addPackageComponent/PdfGen';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {FiFilter} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
import Filter from './Filter';
import FilterByStatus from './FilterByStatus'
import { useDispatch } from 'react-redux';
import { loading } from '../../features/action';
import { useSelector } from 'react-redux';
import { Button,Popconfirm, Space } from 'antd';

const Conatiner=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const MyDiv=styled.div`
  width: 80vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  color: #a0ffa0;
  margin-bottom: 5px;
`
const CopiedSpan=styled.span`
  font-size: 10px;
`
const InfiniteScroll1 = styled(InfiniteScroll)`
  width: calc(100vw - 230px);
`;
const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: collapse;
  border: 1px solid #cecece;
`;
const Tr=styled.tr`
  height: 50px;

`
const IoIosCopy1 = styled(IoIosCopy)`
  color: ${(props) => (props.copied ? "#67ff67" : "black")};
  font-size: 25px;
`;
const Th = styled.th`
  border: 1px solid #cecece;
  border-collapse: collapse;
`;

const WrapperTh=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Td = styled.td`
  border: 1px solid #cecece;
  border-collapse: collapse;
`;
const TrakingBtn=styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 25px;
  border-radius: 5px;
  margin-right: 5px;
`
const GrAddCircle1=styled(GrAddCircle)`
  margin-left: 5px;
  color: white;
`
const WrapperStatus=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StatusBtn=styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  background: ${props=>props.bg};
  border: none;
  color: white;
`
const WilayaBtn=styled.button`
  
`
const AiFillFolderOpen1=styled(AiFillFolderOpen)`
  margin-left: 5px;
`
const Control=styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cecece;
`
const FiFilter1=styled(FiFilter)`
  font-size: 30px;
  margin-left: 20px;
`
const FilterByStatusBtn=styled.button`
  padding: 5px 15px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FilterTotal=styled.button`
  padding: 5px 15px;
  margin-left: 30px;
`
function OurPackage() {
  const dispatch=useDispatch()
  const [items,setItems]=useState([])
  const [index,setIndex]=useState(0)
  const [copiedVal,setcopiedVal]=useState('')
  const [packageId,setPackageId]=useState(null)
  const [showFilter,setShowFilter]=React.useState(false)
  const [showFilterByStatus,setShowFilterByStatus]=React.useState(false)
  const [packageDeleted,setPackageDeleted]=useState('')
  const [filters,setFilters]=React.useState([])
  const user = JSON.parse(useSelector((state) => state.user.value));
  const fetchData=()=>{
    const getData=async()=>{
      try{
        console.log(filters)
        const res = await axios.post(
          `http://localhost:3001/server/package/getPackages/${index}/${user.token}`,filters
        );
        console.log(res.data,index,'data........')
        setIndex(index+7)
        console.log(res.data,'status............')
        if(res.data.status==='byFilter'){
          setItems(res.data.data)
        }else{
          setItems([...items,...res.data.data]);
        }
        dispatch(loading(false))
      }catch(err){
        dispatch(loading(false))
        console.log(err)
      }
      dispatch(loading(false))
    }
    getData();
  }
  const Export=(id)=>{
    setPackageId(id)
  }
  const copiedValue=(item)=>{
    setcopiedVal(item.Traking)
    setTimeout(()=>{
      setcopiedVal('')
    },1000)
  }
  const StatusColor=(status)=>{
    switch(status){
      case 'Prêt à expédier':return 'red';
      case 'en préparation':return 'green';
      case 'c':return 'blue';
      default: return 'white';
    }
  }
  useEffect(()=>{
    fetchData()
  },[packageDeleted,filters])
  const deletePackage=async(packageId)=>{
    setIndex(0)
    setItems([])
    try{
      const res=await axios.delete(`http://localhost:3001/server/package/deletePackage/${packageId}`)
      setPackageDeleted(res.data._id)
      dispatch(loading(false))
    }catch(err){
      dispatch(loading(false))
      console.log(err)
    }
  }
  return (
    <Conatiner>
      <FilterByStatus showFilterByStatus={showFilterByStatus} setShowFilterByStatus={setShowFilterByStatus}/>
      <Filter setIndex={setIndex} setFilters={setFilters} showFilter={showFilter} setShowFilter={setShowFilter}/>
      <Control>
        <FilterTotal>Total</FilterTotal>
        <FilterByStatusBtn onClick={()=>setShowFilterByStatus(true)}>par statut<AiFillFolderOpen1/></FilterByStatusBtn>
        <FiFilter1 onClick={()=>setShowFilter(true)}/>
      </Control>
      {packageId&&
        <PdfGen packageId={packageId} setNewPackage={setPackageId}/>
      }
      <InfiniteScroll1
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        threshold={10}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Table>
          <Tr>
            <Th>Traking</Th>
            <Th>Statut </Th>
            <Th>Nom prénom </Th>
            <Th>Commune </Th>
            <Th>wilaya</Th>
            <Th>Stop-Desk </Th>
            <Th>Action</Th>
          </Tr>
          {items.map((item, idx) => (
            <Tr key={idx}>
              <Td>
                <WrapperTh>
                  <TrakingBtn>
                    {item.Traking}
                    <GrAddCircle1 />
                  </TrakingBtn>
                  <CopyToClipboard text={item.Traking}>
                    <IoIosCopy1
                      onClick={()=>copiedValue(item)}
                      copied={item.Traking === copiedVal}
                    />
                  </CopyToClipboard>
                </WrapperTh>
              </Td>
              <Td>
                <WrapperStatus>
                  <StatusBtn bg={StatusColor(item.Status)}>
                    {item.Status}
                    <GrAddCircle />
                  </StatusBtn>
                </WrapperStatus>
              </Td>
              <Td>{item.BuyerFirstName + " " + item.BuyerLastName} </Td>
              <Td>{item.Commune} </Td>
              <Td>{item.Wilaya}</Td>
              <Td>{item.ProductsChanges} </Td>
              <Td><FaFileExport onClick={()=>Export(item._id)}/>
              <Popconfirm onConfirm={()=>deletePackage(item._id)} title="Are you sure send this data ?" okText="Yes" cancelText="No">
                <Button type="primary" danger>
                Del
              </Button>
              </Popconfirm>
              </Td>
            </Tr>
          ))}
        </Table>
      </InfiniteScroll1>
    </Conatiner>
  );
}

export default OurPackage