import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { loading } from '../../features/action'
import { useSelector } from 'react-redux'
import { Button,Popconfirm , Radio, Space, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { PrinterOutlined } from '@ant-design/icons';
import axios from 'axios'
import Loading from '../../retulisable/Loading'
const Container=styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper=styled.div`
  position: relative;
  height: 100%;
`
const Item=styled.div`
  width: 80%;
  height: 50px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease;
`
const CreatedAt=styled.div`
  padding: 10px;
  background-color: #c3c3c3;
  color: white;
`
const FileNameDiv=styled.div`
  padding: 10px;
  background-color: #c3c3c3;
  color: white;
`
function MyImports() {
  const loading1=useSelector(state=>state?.userLoad?.value)
  const user = JSON.parse(useSelector((state) => state.user.value));
  const [items,setItems]=useState([])
  const dispatch=useDispatch()
  const [refresh,setRefresh]=useState(false)
  const deletePackagesImported=async(fileName)=>{
    dispatch(loading(true))
    try{
      const res=await axios.delete(`http://localhost:3001/server/package/deleteImports/${fileName}`)
      console.log(res.data)
      setRefresh(!refresh)
      dispatch(loading(false))
    }catch(err){
      console.log(err)
      dispatch(loading(false))
    }
  }
  const handleDownload = (fileName) => {
    fetch(`http://localhost:3001/server/package/download/${fileName}`)
      .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file-to-download.csv');
      document.body.appendChild(link);
      link.click();
      console.log(link)
      document.body.removeChild(link);
    })
    .catch(error => console.error(error));
  }
  useEffect(()=>{
    const getData=async()=>{
      dispatch(loading(true))
      try{
        const res = await axios.get(
        `http://localhost:3001/server/package/getImports/${user.token}`
        );
        setItems(res.data);
        dispatch(loading(false))
        console.log(res)
      }catch(err){
        dispatch(loading(false))
        console.log(err)
      }
      dispatch(loading(false))
    }
    getData();
  },[refresh])
  return (
    <Container>
      <Wrapper>
        {
            loading1&&<Loading/>
        }
        {
          items.map((item,idx)=>(
            <Item key={idx}>
              {console.log(item.authorData.createdAt)}
              <CreatedAt>
                {item.authorData.createdAt}
              </CreatedAt>
              <FileNameDiv>
                {item.authorData.FileName}
              </FileNameDiv>
              <Button onClick={()=>handleDownload(item.authorData.FileName)} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                Download
              </Button>
              <Button
                type="primary"
                icon={<PrinterOutlined />}
                loading={false}
              >
                Print
              </Button>
              <Popconfirm
                placement="topLeft"
                title={'Are you sure to delete this file?'}
                description={'Delete the file'}
                onConfirm={()=>deletePackagesImported(item.authorData.FileName)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
              
            </Item>
          ))
        }
      </Wrapper>
      
    </Container>
  )
}

export default MyImports