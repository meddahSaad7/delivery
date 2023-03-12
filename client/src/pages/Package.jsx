import React,{useState} from 'react'
import styled from "styled-components";
import AddProduct from '../components/PackageComponents/AddPackage';
import ImportPackages from '../components/PackageComponents/ImportPackages';
import ListOfReturn from '../components/PackageComponents/ListOfReturn';
import MyAlerts from '../components/PackageComponents/MyAlerts';
import MyImports from '../components/PackageComponents/MyImports';
import OurPackage from '../components/PackageComponents/OurPackage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {myComp} from '../features/defaultComp'
const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10vh;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f3f2f2;
  display: flex;
`;
const Left=styled.div`
  flex: 1;
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Right=styled.div`
  flex: 5;
  height: auto;
`
const Button = styled.button`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  background: ${porps=>porps.clicked?'#a61e22':'white'};
  color: ${porps=>porps.clicked?'white':'black'};
  :hover {
    background-color: #a61e22;
    color: white;
  }
`;
function Package() {
  const dispatch=useDispatch()
  const defaultCom=useSelector(state=>state?.defaultComponent?.value)
  const [comp,setComp]=useState(defaultCom)
  const objectT=()=>{
    switch (comp) {
      case "AddProduct":
        dispatch(myComp('AddProduct'))
        return <AddProduct />;
      case "ImportPackages":
        dispatch(myComp('ImportPackages'))
        return <ImportPackages />;
      case "ListOfReturn":
        dispatch(myComp('ListOfReturn'))
        return <ListOfReturn />;
      case "MyAlerts":
        dispatch(myComp('MyAlerts'))
        return <MyAlerts />;
      case "MyImports":
        dispatch(myComp('MyImports'))
        return <MyImports />;
      case "OurPackage":
        dispatch(myComp('OurPackage'))
        return <OurPackage/>;
      default: return <AddProduct/>;
    }
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Button onClick={() => setComp("MyAlerts")} clicked={comp==='MyAlerts'}>Mes alertes</Button>
          <Button onClick={() => setComp("OurPackage")} clicked={comp==='OurPackage'}>Mes colis</Button>
          <Button onClick={() => setComp("MyImports")} clicked={comp==='MyImports'}>Mes importation</Button>
          <Button onClick={() => setComp("AddProduct")} clicked={comp==='AddProduct'}>
            Ajouter un colis
          </Button>
          <Button onClick={() => setComp("ImportPackages")} clicked={comp==='ImportPackages'}>
            Importer des colis
          </Button>
          <Button onClick={() => setComp("ListOfReturn")} clicked={comp==='ListOfReturn'}>Mes retours</Button>
        </Left>
        <Right>{((objectT()))}</Right>
      </Wrapper>
    </Container>
  );
}

export default Package