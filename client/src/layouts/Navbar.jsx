import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineHome } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import {GoPackage} from 'react-icons/go';
import {AiOutlineBank} from 'react-icons/ai';
import {RiMailSendLine} from 'react-icons/ri';
import {GiCardPickup} from 'react-icons/gi';
import {CiExport} from 'react-icons/ci';
import {MdOutlineRequestPage} from 'react-icons/md';
import {GiLifeBar} from 'react-icons/gi';
import {CgPerformance} from 'react-icons/cg';
import {MdPayment} from 'react-icons/md';
import {TfiStatsUp} from 'react-icons/tfi';
import {MdDeveloperMode} from 'react-icons/md';
import {FiSettings} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {GiCheckMark} from 'react-icons/gi';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {AiOutlineFileSearch} from 'react-icons/ai';
import PopUp from '../retulisable/PopUp';
import NoteficationContent from '../contents/NoteficationContent'
import {loading} from '../features/action'
import { useSelector } from 'react-redux';
import Loading from '../retulisable/Loading';
const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: #f3f2f2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
`;
const Left = styled.div`
  flex: 1;
  background-color: #f3f2f2;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f3f2f2;
`;
const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 5;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;
const Links=styled.div`
  width: auto;
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding-left: 35vw;
  height: 100%;
`
const LinkDiv = styled.div`
  text-decoration: none;
  font-size: 10px;
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #a61e22;
    color: white;
  }
`;
//right
const Notification=styled.div`

`
const IoMdNotificationsOutline1 = styled(IoMdNotificationsOutline)`
  font-size: 25px;
  cursor:pointer;
  font-weight: bold;
`;
const GiCheckMark1 = styled(GiCheckMark)`
  font-size: 25px;
  cursor:pointer;
  font-weight: bold;
`;
const IoIosAddCircleOutline1 = styled(IoIosAddCircleOutline)`
  font-size: 25px;
  cursor:pointer;
  font-weight: bold;
`;
const AiOutlineFileSearch1 = styled(AiOutlineFileSearch)`
  font-size: 25px;
  cursor:pointer;
  font-weight: bold;
`;
const Check=styled.div`

`
const Add=styled.div`

`
const Search=styled.div`

`
//left
const Logo=styled.img`
  width: 100%;
  height: 100%;
`
function Navbar() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logout=async()=>{
    dispatch(login(null))
    navigate('/login')
  }
  const [showPopUpNotification,setShowPopUpNotification]=React.useState(false)
  return (
    <Container>
      {
        showPopUpNotification&&<PopUp content={<NoteficationContent/>} width={80} height={60} close={setShowPopUpNotification}/>
      }
      <Left>
        <Logo src="/images/logo.png" onClick={()=>navigate('/')}/>
      </Left>
      <Center>
        <Links>
          <LinkDiv onClick={() => navigate("/")}>
            <AiOutlineHome />
            Accueil
          </LinkDiv>
          {/* <LinkDiv onClick={() => navigate("/Archives")}>
            <BsArchive />
            Archives
          </LinkDiv> */}
          <LinkDiv onClick={() => navigate("/Package")}>
            <GoPackage />
            Colis
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Ouragencies")}>
            <AiOutlineBank />
            Nos agences
          </LinkDiv>
          {/* <LinkDiv onClick={() => navigate("/Dispatch")}>
            <RiMailSendLine />
            prêt. expédier
          </LinkDiv> */}
          <LinkDiv onClick={() => navigate("/Ramassage")}>
            <GiCardPickup />
            Demande ramassage
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/MyExports")}>
            <CiExport />
            Mes exportations
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Requests")}>
            <MdOutlineRequestPage />
            Demandes
          </LinkDiv>
          {/* <LinkDiv onClick={() => navigate("/LifeTime")}>
            <GiLifeBar />
            Durée de vie
          </LinkDiv> */}
          <LinkDiv onClick={() => navigate("/Performance")}>
            <CgPerformance />
            Performance
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Payments")}>
            <MdPayment />
            Paiements
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Stats")}>
            <TfiStatsUp />
            Stats
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Development")}>
            <MdDeveloperMode />
            Développement
          </LinkDiv>
          <LinkDiv onClick={() => navigate("/Settings")}>
            <FiSettings />
            Paramètres
          </LinkDiv>
          <LinkDiv onClick={logout}>
            <FiLogOut />
            Se déconnecter
          </LinkDiv>
        </Links>
      </Center>
      <Right>
        <Notification>
          <IoMdNotificationsOutline1  onClick={()=>setShowPopUpNotification(true)}/>
        </Notification>
        <Check>
          <GiCheckMark1 onClick={()=>navigate("/Status")}/>
        </Check>
        <Add>
          <IoIosAddCircleOutline1 />
        </Add>
        <Search>
          <AiOutlineFileSearch1 />
        </Search>
      </Right>
    </Container>
  );
}

export default Navbar