import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../retulisable/Loading';

const Container=styled.div`

`
function Layout(props) {
    const location=useLocation()
    const loading=useSelector(state=>state?.userLoad?.value)
  return (
    <Container>

        {/* {
            loading&&<Loading/>
        } */}
        <Navbar/>
        {props.children}
        {
            !location.pathname.split('/')[1]&&<Footer/>
        }
        
    </Container>
  )
}

export default Layout