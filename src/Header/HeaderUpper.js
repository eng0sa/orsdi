import React from "react";
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import {FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function UpperHeader(){
return (
<>
<header className='header-upper py-3'>
<Container className='xxl'>
<Row className='align-item-center'>
<Col xs={12} md={6} lg={4}>
<Link to={'/'}>
<img
className="logo "
src={require('../../src/imge/logo.webp') }
alt="First slide"
/>
</Link>
</Col>
<Col xs={12} md={6} lg={4}>
<InputGroup className="input ">
<Form.Control
type='text'
className='from-control py-2'
placeholder="ما الذي تبحث عنه؟"
/>
<span
className='input-group-text p-2 '
id="basic-addon2">
<Link><FaSearch  className='fs-5'/></Link>
</span>
</InputGroup>
</Col>
</Row>
</Container>
</header>
</>
)
}
export default UpperHeader;