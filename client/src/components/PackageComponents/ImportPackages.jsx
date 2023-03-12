import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import Alert2 from '../../retulisable/Alert'
import Retour from '../../retulisable/Retour'
import { Link } from 'react-router-dom'
import {BiLinkExternal} from 'react-icons/bi'
import ModalCustom from '../../retulisable/ModalCustom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loading } from '../../features/action'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Alert, Space, Upload } from 'antd';
import Loading from '../../retulisable/Loading'
const Container=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Top=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Center=styled.div`
  flex: 3;
  display: flex;
`
const Bottom=styled.div`
  flex: 1;
  height: 30vh;
  background-color: green;
`
const Left=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Right=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const InputContainer=styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  border-radius: 5px;
  border: 1px solid #cdcdcd;
  overflow: hidden;
`
const Label=styled.label`
  flex: 4;
  display: flex;
  align-items: center;
  color: #c2c2c2;
  padding-left: 10px;
`
const Input=styled.input`
  display: none;
`

const Accept=styled.div`
  width: 90%;
  height: 40px;
  margin-top: 30px;
`
const CheckBox=styled.input`
  
`
const Link1=styled(Link)`
  display: flex;
  align-items: center;
`
const Button1=styled(Button)`
  height: 100%;
`
const ErrContainer=styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`
const ErrAlert=styled(Alert)`
  margin-bottom: 5px;
  width: 40%;
`
function ImportPackages() {
  const loading1=useSelector(state=>state?.userLoad?.value)
  const [load,setLoad]=useState(false)
  const dispatch=useDispatch()
  const user = JSON.parse(useSelector((state) => state.user.value));
  var XLSX = require("xlsx");
  const [file,setFile]=useState(null)
  const [data, setData] = useState([]);
  const [errors,setErrors]=useState([])
  const submit=async()=>{
    if(file){
      // dispatch(loading(true))
      setLoad(true)
      const formData = new FormData();
      formData.append('model', file);
      try{
      await axios.post(`http://localhost:3001/server/package/importPackage/${user.token}`,formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      // dispatch(loading(false))
      setLoad(false)
      // setFile(null)
    }catch(err){
      // dispatch(loading(false))
      setLoad(false)
      console.log(err)
    }
    }else{
      setErrors([...errors,'please select your file...'])
    }
  }
  const handleExport = (event) => {
    const headers = ["BuyerFirstName", "BuyerLastName", "BuyerPhone","HomeDelivery","PriceDelivery","Wilaya","AgenceWilaya","Commune","Agence","Adress","Products","NumCommunde","PackagePrice","changeProduct","freeDelivery","ProductsChanges"];
    const ws = XLSX.utils.json_to_sheet(data, { header: headers });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "model.csv");
  };
  return <Container>
    <ErrContainer>
      {errors.map((err,index)=>(
        <ErrAlert onClose={()=>errors.splice(errors.indexOf(err),1)} top={index} message={err} type="error" showIcon closable key={index}/>
      ))}
    </ErrContainer>
    {
      load&&<Loading/>
    }
    <Top>
      <Retour title={'Importer des colis'}/>
      <Alert2 Title={'Important'} value={'Mubtakar vous informe qu’il y aura des retards de livraisons en raison des chutes de neige, merci pour votre compréhension.'}/>
    </Top>
    
    <Center>
      <Left>
        <InputContainer>
          <Label htmlFor="inputFile">
            {
              file?file.name:'Choisissez le fichier a importer'
            }
          </Label>
          <Input onChange={(e)=>setFile(e.target.files[0])} type={'file'} id='inputFile'/>
          {
            file?
            <Popconfirm onConfirm={submit} title="Are you sure send this data ?" okText="Yes" cancelText="No">
            <Button1>Parcourir</Button1>
          </Popconfirm>:
            <Button1 disabled>Parcourir</Button1>
          }
        </InputContainer>
        <Accept>
          <CheckBox type={'checkbox'}/>
          J'acceptes 
          <Link1>les conditions générales de transport des marchandises <BiLinkExternal/></Link1>
        </Accept>
      </Left>
      <Right>
        <ModalCustom onClickFn={(event)=>handleExport(event)} title={"Model d'importation"} text={'Utilisez ce model pour importer vos colis.'} textBtn={'télécharger le model'} background={'#d4edda'} backgroundBtn={'#007bff'}/>
        <ModalCustom title={"Important"} text={'Vous devez utiliser les noms officiels des wilayas et des communes'} textBtn={'télécharger les noms officiels'} background={'#d1ecf1'} backgroundBtn={'#007bff'}/>
      </Right>
    </Center>
  </Container>;
}

export default ImportPackages