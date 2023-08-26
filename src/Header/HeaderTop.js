import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import {FaSearch , FaHome ,
        FaShoppingCart ,
        FaFacebookF,FaFacebookMessenger ,
    FaInstagram, FaApple, FaGooglePlay
} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';     
import Signin from "../pages/PageHeader/Signin/Signin";

function TopHeader() {
const [isSearchVisible, setSearchVisible] = useState(false);

    return (
    <>
    <header className='header-top-strip'>
    <Container className='xxl'>
        <Row>
        <Col xs={12} md={6} lg={4}>
        <div className='part1'>
        <Link href="#" className={`hover-icons ${isSearchVisible ? 'active' : ''}`}
                        onClick={() => setSearchVisible(!isSearchVisible)}
        >
        <FaSearch />
        </Link>
        {isSearchVisible && (
        <InputGroup className="mb-3 input-search">
        <Form.Control
            placeholder="ما الذي تبحث عنه"
            aria-describedby="ما الذي تبحث عنه"
        />
        </InputGroup>
                )}
        <Link to= '/' className="hover-icons"><FaHome /></Link>
        <Signin className="hover-icons" />
        <Link to='/shop'className="hover-icons">عربة التسوق <FaShoppingCart/> <span className="num">0</span></Link>
        </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
        <p className='text'>التسوق اريح وارخص</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
        <div className='social'>
        <Link to={'https://play.google.com/store/apps/details?id=com.orisdi.shopifyapp&hl=en'} className="hover-icons" ><FaGooglePlay /></Link>
        <Link to={'https://apps.apple.com/us/app/orisdi-%D8%A7%D9%88%D8%B1%D8%B2%D8%AF%D9%8A/id1464664365'} className="hover-icons"><FaApple /></Link>
        <Link to={'https://www.instagram.com/orisdiiraq/'} className="hover-icons"><FaInstagram /></Link>
        <Link to={'https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F715432085523439%2F%3Fref%3Dw5131234%26messaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0'}
        className="hover-icons"><FaFacebookMessenger /></Link>
        <Link to={'https://www.facebook.com/orisdiiraq'} className="hover-icons"><FaFacebookF /></Link>
        </div>
        </Col>
        </Row>
    </Container>
    </header>       
    </>
    )
}
export default TopHeader;