import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import styled from "styled-components";
import Alert from "../retulisable/Alert";
const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10vh;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f3f2f2;
  padding: 20px;
`;
// const Alert=styled.div`
//   width: 90%;
//   height:60px;
//   padding-left: 30px;
//   display: flex;
//   align-items: center;
//   margin-bottom: 30px;
//   background: ${props=>props.$bg};
// `
const Info=styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid #d2d2d2;
  display: flex;
  flex-direction: column;
`
const TitleInfo=styled.div`
  height: 100%;
  flex: 1;
  padding-left: 10px;
  background-color: #dedede;
  display: flex;
  align-items: center;
  font-size: 25px;
`
const TitleSubInfo=styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const TextInfo=styled.p`
  margin: 10px;
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
function Home() {
  const dispatch = useDispatch();
  const user = JSON.parse(useSelector((state) => state.user.value));
  return (
    <Container>
      <Wrapper>
        {/* <Alert $bg={'#fff3cd'}>
          Important: Mubtakar vous informe qu’il y aura des retards de livraisons en raison des chutes de neige, merci pour votre compréhension.
        </Alert>
        <Alert $bg={'#d6d8d9'}>
          Bonjour mr {user.firstName}
        </Alert> */}
        <Alert Title={'Important'} value={'Mubtakar vous informe qu’il y aura des retards de livraisons en raison des chutes de neige, merci pour votre compréhension.'}/>
        <Alert value={`Bonjour mr ${user.firstName}`}/>
        <Info>
          <TitleInfo>Information</TitleInfo>
          <TextInfo>
            <TitleSubInfo>Cette partie est en construction</TitleSubInfo>
            Vous allez trouvez ici plusieurs fonctionnalité, mais en attendant, naviger au fonctionnalitées déja disponible grace au menu
          </TextInfo>
        </Info>
      </Wrapper>
    </Container>
  );
}
export default Home;
