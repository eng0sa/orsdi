import React from 'react';
import { Col, Container, InputGroup, Row } from 'react-bootstrap'
import {
  FaFacebookF, FaFacebookMessenger,
  FaInstagram, FaApple, FaGooglePlay
}
  from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './footer.css';

function AppFooter () {
  return (
< div className='all-footer'>
<footer className='upper-footer py-1'>
<Container className='xl'>
  <Row>
  <Col xs={12} md={6} lg={4} className='info'>
<p className='question'>للعروض الخاصة او للاسئلة والاستفسارات</p>
<p className='facbook'>من خلال الفيسبوك مسنجر اضغط    <Link to={'https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F715432085523439%2F%3Fref%3Dw5131234%26messaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0' }> هنا</Link></p>
<p className='gmail'>من خلال البريد الالكتروني ادخل ايميلك بالاسفل </p>
<div className='input'>
  <InputGroup className="mb-3">
  <Form.Control
  placeholder="ادخل البريد الالكتروني"
  aria-label="ادخل البريد الالكتروني"
  className='enter-mail'
  />
  <InputGroup.Text className='login'><Link>تسجيل</Link></InputGroup.Text>
  </InputGroup>
  </div>
  <div className='birthday'>
<Link to={'/birthday'}>اشترك في <span>نادي عيد الميلاد</span> للحصول على عروض و خصومات في عيد ميلادك</Link>
  </div>
  </Col>
  <Col xs={12} md={6} lg={2} >
  <p className='section'> الاقسام</p>
  <p className='branch'><Link>العطور</Link></p>
  <p className='branch'><Link>الصحة و الجمال</Link></p>
  <p className='branch'><Link>المنزل و المطبخ</Link></p>
  <p className='branch'><Link>الكترونيات</Link></p>
  <p className='branch'><Link>قرطاسية</Link></p>
  <p className='branch'><Link>عالم الطفل</Link></p>
  <p className='branch'><Link>العاب</Link></p>
  <p className='branch'><Link>اخرى</Link></p>
  <p className='branch'> <Link>امازون</Link></p> 
</Col>
<Col xs={12} md={6} lg={2}>
  <p className='send'>اتصل او واتساب او راسلنا</p>
  <p className='phone'>07833500360</p>
  <p className='phone'>07833500367</p>
  <p className='phone'>07709908882</p>
  <p className='send-gmail'><Link to={'support@orisdi.com'}>support@orisdi.com</Link></p>

</Col>
<Col xs={12} md={6} lg={4}>
  <p className='orisdi'>اورزدي</p>
  <p className='orisdi-shop'>موقع التسوق الالكتروني رقم ١ في العراق</p>
  <p className='line'>_________</p>
  <p className='orisdi-info'><Link to={'/aboutorisdi'}>عن اورزدي</Link></p>
  <p className='orisdi-info'><Link to={'/shipping'}>مدة و كلفة الشحن</Link></p>
  <p className='orisdi-info'><Link >حاسبة اجور الشحن الدولي</Link></p>
  <p className='orisdi-info'><Link to={'/globalWebsites'}
  target="_blank" rel="noopener noreferrer">تسوق من المواقع الدولية</Link></p>
  <p className='orisdi-info'><Link to={'/payment'}>طرق الدفع</Link></p>
  <p className='orisdi-info'><Link>سياسة الارجاع</Link></p>
  <p className='orisdi-info'><Link>اربح مع اورزدي</Link></p>
  <p className='orisdi-info'><Link>عروض تسويقية للتجار</Link></p>
  <p className='orisdi-info'><Link>البيع على اورزدي</Link></p>
  <p className='orisdi-info'><Link>الشروط و الاحكام</Link></p>
  <p className='orisdi-info'><Link>سياسة الخصوصية</Link></p>
</Col>
  </Row>
</Container>   

</footer>
<footer className='py-3' >
<Container className='xl'>
  <Row>
<Col xs={12} md={6} lg={8}>
<div className='footer-social'>
<Link href="search#" className='soci'><FaGooglePlay /></Link>
<Link href="search#" className='soci'><FaApple /></Link>
<Link href="search#" className='soci'><FaInstagram /></Link>
<Link href="search#" className='soci'><FaFacebookMessenger /></Link>
<Link href="search#" className='soci'><FaFacebookF /></Link>
</div>
<div className='img'>
<img
className="imges"
src={require('../../src/imge/orisdi-online-payments_2.webp') }
alt="img"
/> 
  </div>  
<p className='footer-text'>جميع الحقوق محفوظة © 2023 <Link className='orisdi-link'>ORISDI</Link></p>  
</Col>
  </Row>
</Container>
</footer>

</div>)
}

export default AppFooter