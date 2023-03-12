import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import {FiUserCheck} from 'react-icons/fi'
import {FiPhone} from 'react-icons/fi'
import axios from 'axios'
import { useNavigate } from 'react-router'
import ContentLoader,{Facebook,List,Code} from 'react-content-loader';
import { FaCheckDouble } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {uid} from 'uid';
import QrCodeGen from '../addPackageComponent/PdfGen'
import { useSelector } from 'react-redux';
import Retour from '../../retulisable/Retour'
import { Button, Popconfirm, Alert, Space, Upload } from 'antd';

const Container=styled.div`
  width: 100%;
  height: 100%;
`
const Top=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  border-bottom: 1px solid #cecece;
`
const Title=styled.h2`
    margin-left: 20px;
`
const Return = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  margin-right: 20px;
  font-size: 25px;
  background-color: #a61e22;
  border: none;
  color: white;
`;
const Notes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom:1px solid #cecece;
`;
const Note = styled.div`
  width: 90%;
  height: 90%;
  background-color: #cce5ff;
  padding: 0px 20px;
  border-radius: 10px;
`;
const TitleNote=styled.h4`
  
`
const TextNote=styled.p`
  
`
const ClientForm = styled.div`
  display: flex;
  margin-top: 50px;
  border-bottom:1px solid #cecece;
`;
const LeftCF=styled.div`
  flex: 2;
  border-right: 1px solid gray;
  padding-bottom: 30px;
`
const FormCF=styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 30px;
`
const Input=styled.input`
  height: 100%;
  width: 100%;
  font-size: 25px;
  padding-left: 35px;
  outline: none;
  border: none;
`
const InputContainer=styled.div`
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  position: relative;
`
const RightCF=styled.div`
  flex: 2;
`
const TitleCF=styled.h4`
  margin-left: 30px;
`
const FiUserCheck1 = styled(FiUserCheck)`
  position: absolute;
  font-size: 25px;
  padding: 5px;
  top: 5px;
  left: 0px;
  color: gray;
`;
const FiPhone1 = styled(FiPhone)`
  position: absolute;
  font-size: 25px;
  padding: 5px;
  top: 5px;
  left: 0px;
  color: gray;
`;
const Checks=styled.div`
  margin-left: 30px;
`
const CheckContainer=styled.div`
  display: flex;
  align-items: center;
`
const CheckBox=styled.input`
  width: 15px;
  height: 15px;
`
const TitleCheck=styled.p`
  
`
const DeliveryInfo = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #cecece;
`;
const TitleDeliveryInfo=styled.h4`
  margin-left: 30px;
`
const InputsDelivery=styled.div`
  margin-left: 30px;
  display: flex;
`
const SelectContainer = styled.div`
  width: 250px;
  height: 30px;
  outline: none;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
`;
const Select=styled.select`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`
const CommuneSelect=styled.select`
  
`
const Option=styled.option`
  
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const AdressContainer = styled.div`
  width: 400px;
  height: 30px;
  position: relative;
`;
const AdressHome = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
`;
const Price = styled.div`
  width: 300px;
  height: 30px;
  margin-left: 20px;
  border: 1px solid gray;
  color: gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
`;
const CommandeInfo=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ececec;
  padding-left: 30px;
`
const InputCont = styled.div`
  width: 40%;
  height: 30px;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
`;
const InputC=styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`
const ProductReturn = styled.div`
  width: 90%;
  height: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  position: relative;
`;
const InputPR=styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  outline: none;
`
const Pricies = styled.div`
  height: auto;
  margin-bottom:30px;
`;
const TitleP=styled.h4`
  margin-left: 30px;
`
const Table=styled.table`
  width: 90%;
  height: 100%;
  border: 1px solid gray;
  margin-left: 30px;
  
`
const Tr=styled.tr`
`
const Th=styled.th`
  border: 1px solid gray;
`
const Acceptation=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 30px;
`
const Link=styled.a`
  margin-left: 10px;
`
const Submit = styled.button`
  margin-left: 35%;
  padding: 10px;
  background-color: #a61e22;
  border: none;
  color: white;
`;
const Skeleton1 = styled(Skeleton)`
  width: 150px;
  height: 30px;
`;
const Succes = styled.div`

  background-color: #60fe60;
 
  margin-left: 35%;
  padding: 10px;
  border: none;
  color: white;
`;
const FaCheckDouble1 = styled(FaCheckDouble)`
  margin-left: 5px;
`;
const Error=styled.div`
  width: 100%;
  height:${props=>props.$Leng===0?"0px":'100%'};
  background-color: red;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .5s ease;
`
function AddProduct() {
  const user = JSON.parse(useSelector((state) => state.user.value));
  const [home,setHome]=useState(false)
  const [agence,setAgence]=useState(true)
  const [agences, setAgences] = useState([]);
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [price, setPrice] = useState(null);
  const [changeProduct,setChangeProduct]=useState(false)
  const [freeDelivery,setFreeDelivery]=useState(false)
  const [refresh,setRefesh]=useState(false)
  const [status,setStatus]=useState(null)
  const [errors,setErrors]=useState([])
  const [newPackage,setNewPackage]=useState(null)
  const BuyerFirstName=useRef()
  const BuyerLastName=useRef()
  const BuyerPhone=useRef()
  const Wilaya=useRef();
  const Commune=useRef();
  const AgencePlace = useRef();
  const Adress=useRef();
  const Products=useRef();
  const NumCommunde=useRef();
  const PackagePrice=useRef();
  const ProductsChanges=useRef();
  const navigate = useNavigate();
  const checkFunctoin=(type,e)=>{
    document.getElementById("selectWilaya").value='';
    document.getElementById("selectCommune").value='';
    setPrice(null);
    if(type==='home'){
      if (e.target.checked){
        setHome(true);
        setAgence(false);
      }else{
        setHome(true);
      }
    }else{
      if (e.target.checked){
        setAgence(true);
        setHome(false);
      }else{
        setAgence(true);
      }
    } 
  }
  //end check box settings
  //wilaya and commune
  const selectAgence=async(commune)=>{
    const res = await axios.get(
      `http://localhost:3001/server/location/agence/${commune}`
    );
    setAgences(res.data);
  }
  const selectCommune=async(wilayaId)=>{
    const res = await axios.get(
      `http://localhost:3001/server/location/communes/${wilayaId}`
    );
    const resW = await axios.get(
      `http://localhost:3001/server/location/wilaya/${wilayaId}`
    );
    setCommunes(res.data)
    setAgences([]);
    if(home){
      setPrice(resW.data.homeDeliveryPrice);
    }
    if(agence){
      setPrice(resW.data.agenceDeliveryPrice);
    }
  }
  useEffect(() => {
    const selectWilaya = async () => {
      const res = await axios.get(
        "http://localhost:3001/server/location/wilayas"
      )
      setWilayas(res.data);
    };
    selectWilaya();
  }, []);
  const filterData=(data)=>{
    if(data.current===undefined||data.current===null){
      return ''
    }else{
      return data.current.value
    }
  }
  const Data=()=>{
    return {
      Traking: uid(6),
      BuyerFirstName: BuyerFirstName.current.value,
      BuyerLastName: BuyerLastName.current.value,
      BuyerPhone: BuyerPhone.current.value,
      HomeDelivery: home,
      AgenceDelivery: agence,
      PriceDelivery: +price,
      Wilaya: +Wilaya.current.value,
      AgenceWilaya:user.wilaya,
      Commune: +Commune.current.value,
      Agence: filterData(AgencePlace),
      Adress: filterData(Adress),
      Products: Products.current.value,
      NumCommunde: +NumCommunde.current.value,
      PackagePrice: +PackagePrice.current.value,
      changeProduct: changeProduct,
      freeDelivery: freeDelivery,
      ProductsChanges: filterData(ProductsChanges),
    };
  }
  const ErrContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 999;
    padding-top: 20px;
  `
  const ErrAlert=styled(Alert)`
    margin-bottom: 5px;
    width: 40%;
  `
  const createPackage=async()=>{
    try{
      const res = await axios.post(`http://localhost:3001/server/package/addPackage/${user.token}`, Data())
      setNewPackage(res.data)
      setStatus(res.status);
    }catch(err){
      setErrors(err.response.data);
    }
  }
  const FilterErrors=(errName)=>{
    const newData=errors.filter(err => {
      if(err.includes(errName)){
        return err
      }
    })
    return newData
  }
  const validateErr=(errName)=>{
    const newData=errors.filter(err=>{
      if(!err.includes(errName)){
        return err
      }
    })
    setErrors(newData);
  }
  const removeErr=(index)=>{
    const newErrors=errors.filter((err,idx)=>{
      if(idx!==index){
        return err
      }
    })
    setErrors(newErrors)
  }
  return (
    <Container>
      {
        errors.length>0?<ErrContainer>
          {errors.map((err,index)=>(
            <ErrAlert onClose={()=>removeErr(index)} top={index} message={err} type="error" showIcon closable key={index}/>
          ))}
        </ErrContainer>:''
      }
      
      {newPackage && (
        <QrCodeGen packageId={newPackage._id} Import={false} setNewPackage={setNewPackage} />
      )}
      <Top>
        <Retour title={'Ajouter un colis'}/>
      </Top>
      <Notes>
        <Note>
          <TitleNote>Notez bien</TitleNote>
          <TextNote>
            le surpoids d'un colis est désormais payable en agence.
          </TextNote>
        </Note>
      </Notes>
      <ClientForm>
        <LeftCF>
          <TitleCF>Informations sur le client</TitleCF>
          <FormCF>
            <InputContainer>
              <FiUserCheck1 />
              <Input placeholder="Nom" ref={BuyerFirstName} required />
              {/* <Error
                onClick={() => validateErr("BuyerFirstName")}
                $Leng={FilterErrors("BuyerFirstName").length}
              >
                {FilterErrors("BuyerFirstName").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </InputContainer>
            <InputContainer>
              <FiUserCheck1 />
              <Input placeholder="Prénom" ref={BuyerLastName} required />
              {/* <Error
                onClick={() => validateErr("BuyerLastName")}
                $Leng={FilterErrors("BuyerLastName").length}
              >
                {FilterErrors("BuyerLastName").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </InputContainer>
            <InputContainer>
              <FiPhone1 />
              <Input placeholder="Téléphone" ref={BuyerPhone} required />
              {/* <Error
                onClick={() => validateErr("BuyerPhone")}
                $Leng={FilterErrors("BuyerPhone").length}
              >
                {FilterErrors("BuyerPhone").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </InputContainer>
          </FormCF>
        </LeftCF>
        <RightCF>
          <TitleCF>type de livraison</TitleCF>
          <Checks>
            <CheckContainer>
              <CheckBox
                checked={home}
                type={"checkbox"}
                onClick={(e) => {
                  checkFunctoin("home", e);
                }}
              />
              <TitleCheck>Livraison à domicile</TitleCheck>
            </CheckContainer>
            <CheckContainer>
              <CheckBox
                checked={agence}
                type={"checkbox"}
                onClick={(e) => checkFunctoin("agence", e)}
              />
              <TitleCheck>
                Livraison en point relais{" (stop desk) "}
              </TitleCheck>
            </CheckContainer>
          </Checks>
        </RightCF>
      </ClientForm>
      <DeliveryInfo>
        <TitleDeliveryInfo>les informations de la livraison</TitleDeliveryInfo>
        <InputsDelivery>
          <div>
            <SelectContainer>
              <Select
                onChange={(e) => selectCommune(e.target.value)}
                id="selectWilaya"
                ref={Wilaya}
              >
                <Option value={""}>Choissisez</Option>
                {wilayas.map((wilaya, index) => (
                  <Option value={wilaya.id} key={index}>{wilaya.name}</Option>
                ))}
              </Select>
              {/* <Error
                onClick={() => validateErr("Wilaya")}
                $Leng={FilterErrors("Wilaya").length}
              >
                {FilterErrors("Wilaya").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </SelectContainer>
            <SelectContainer>
              <Select
                onChange={(e) => selectAgence(e.target.value)}
                id="selectCommune"
                ref={Commune}
              >
                <Option value={""}>Choisissez d'abord la wilaya</Option>
                {communes.map((commune, index) => (
                  <Option value={commune.id} key={index}>{commune.name}</Option>
                ))}
              </Select>
              {/* <Error
                onClick={() => validateErr("Commune")}
                $Leng={FilterErrors("Commune").length}
              >
                {FilterErrors("Commune").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </SelectContainer>
          </div>

          {!home && (
            <SelectContainer>
              <Select id="selectAgence" ref={AgencePlace}>
                <Option value={""}>Choisissez d'abord la commune</Option>
                {agences.map((agence, index) => (
                  <Option value={agence.id} key={index}>{agence.name}</Option>
                ))}
              </Select>
              {/* <Error
                onClick={() => validateErr("Agence")}
                $Leng={FilterErrors("Agence").length}
              >
                {FilterErrors("Agence").map((err) => (
                  <div>{err}</div>
                ))}
              </Error> */}
            </SelectContainer>
          )}
          <Flex>
            {home && (
              <AdressContainer>
                <AdressHome placeholder="L'adresse postale" ref={Adress} />
                {/* <Error
                  onClick={() => validateErr("Adress")}
                  $Leng={FilterErrors("Adress").length}
                >
                  {FilterErrors("Adress").map((err) => (
                    <div>{err}</div>
                  ))}
                </Error> */}
              </AdressContainer>
            )}
            <Price>Frais livraison:{price ? price + " DA" : ""}</Price>
          </Flex>
        </InputsDelivery>
      </DeliveryInfo>
      <CommandeInfo>
        <InputCont>
          <InputC placeholder="Produit(s)" ref={Products} />
          {/* <Error
            onClick={() => validateErr("Products ")}
            $Leng={FilterErrors("Products ").length}
          >
            {FilterErrors("Products ").map((err) => (
              <div>{err}</div>
            ))}
          </Error> */}
        </InputCont>
        <InputCont>
          <InputC
            placeholder="numéro de commande"
            type={"number"}
            ref={NumCommunde}
          />
          {/* <Error
            onClick={() => validateErr("NumCommunde")}
            $Leng={FilterErrors("NumCommunde").length}
          >
            {FilterErrors("NumCommunde").map((err) => (
              <div>{err}</div>
            ))}
          </Error> */}
        </InputCont>
        <InputCont>
          <InputC
            type={"number"}
            placeholder="Prix du colis"
            ref={PackagePrice}
            onChange={() => setRefesh(!refresh)}
          />
          {/* <Error
            onClick={() => validateErr("PackagePrice")}
            $Leng={FilterErrors("PackagePrice").length}
          >
            {FilterErrors("PackagePrice").map((err) => (
              <div>{err}</div>
            ))}
          </Error> */}
        </InputCont>

        <CheckContainer>
          <CheckBox
            type={"checkbox"}
            checked={freeDelivery}
            onChange={(e) => {
              setFreeDelivery(e.target.checked);
            }}
          />
          Livraison gratuite?
        </CheckContainer>
        <CheckContainer>
          <CheckBox
            type={"checkbox"}
            checked={changeProduct}
            onChange={(e) => setChangeProduct(e.target.checked)}
          />
          Demander un échange après livraison (ceci va créer un second bordereau
          pour le retour de l'objet à échanger)
        </CheckContainer>
      </CommandeInfo>
      {changeProduct && (
        <ProductReturn>
          <InputPR placeholder="Objet(s) à récupérer" ref={ProductsChanges} />
          {/* <Error
            onClick={() => validateErr("ProductsChanges")}
            $Leng={FilterErrors("ProductsChanges").length}
          >
            {FilterErrors("ProductsChanges").map((err) => (
              <div>{err}</div>
            ))}
          </Error> */}
        </ProductReturn>
      )}
      <Pricies>
        <TitleP>Résumé du prix</TitleP>
        <Table>
          <Tr>
            <Th>Prix produit </Th>
            <Th>Frais livraison </Th>
            <Th>Total à ramasser</Th>
          </Tr>
          <Tr>
            <Th>
              {PackagePrice.current?.value === ""
                ? "0 DA"
                : PackagePrice.current?.value + " DA"}
            </Th>
            <Th>{price === null ? "0 DA" : price + " DA"} </Th>
            <Th>{freeDelivery? +PackagePrice.current?.value + " DA":+PackagePrice.current?.value + +price+ " DA"}</Th>
          </Tr>
        </Table>
      </Pricies>
      <Acceptation>
        <CheckBox type={"checkbox"} />
        J'acceptes{" "}
        <Link href="#">
          les conditions générales de transport des marchandises
        </Link>
        {status === 200 ? (
          <Succes onClick={() => setStatus(null)}>
            le colis est valide <FaCheckDouble1 />
          </Succes>
        ) : (
          <Submit onClick={createPackage}>Créer le colis</Submit>
        )}
      </Acceptation>
    </Container>
  );
}
export default AddProduct