import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import Logo from '../assets/Logo.jpg';
import {Link} from 'react-router-dom'

export default function Header(){
    //Add fixed navbar on header
    const [showNav, setShowNav] = useState(false);
    return(
    <div className = "container">
<div className='container mt-3'>
    <MDBNavbar expand='lg' light bgColor='light' className = "rounded-lg">
      <MDBContainer fluid>
        <MDBNavbarBrand href='MathO-QuizBee/'><img src = {Logo} alt = "Logo" id = "Logo"/></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='MathO-QuizBee/reg-guide'>
                Rules and Regulation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='MathO-QuizBee/reg-guide'>Registration Guidelines</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='MathO-QuizBee/health-protocol'>Health Protocol</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='MathO-QuizBee/health-protocol' >
                Emergency Plan
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
    
    </div>
  );
}
    
    
