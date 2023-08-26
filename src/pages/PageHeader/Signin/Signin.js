import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FaFacebook ,FaUser } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './signin.css'

function Signin(props) {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
let [authMode] = useState("signin")

if (authMode === "signin") {
return (
    <>
<Link  onClick={handleShow}><FaUser/></Link>
<Modal show={show} onHide={handleClose}>
<form className="Auth-form">
<div className="Auth-form-content">
<CloseButton className='close' onClick={handleClose} />
<h2 className="Auth-form-title"> الدخول الى الحساب </h2>
<Button variant="outline"  className="face-signin">
<Link className="text-center " title="الدخول باستخدام فيسبوك" aiia-aria-label="الدخول باستخدام فيسبوك">
<div className="icon-face"> <FaFacebook/></div>
<span className="link-primary">
الدخول باستخدام فيسبوك
</span>
</Link>
</Button>
<Button variant="outline"  className="mail-signin">
<Link title="جوجل" aiia-aria-label="جوجل">
<div className="icon-mail"> <FcGoogle/></div>
<span>جوجل</span>
</Link>
</Button>
<div className="form-group mt-3">
<Form.Group  className=" mb-2" controlId="formPlaintextPassword">
<Form.Control className="mail" type="mail" placeholder="البريد الالكتروني" />
</Form.Group>
<Form.Group  className="mb-2" controlId="formPlaintextPassword">
<Form.Control className='password' type="password" placeholder="كلمة المرور " />
</Form.Group>
</div>
<div className='btn-dark' >
<Button variant="dark">دخول</Button>
</div>
<div className='forget'>
<Link>هل  نسيت كلمة المرور ؟</Link>
</div>
<div className='footer-signin'>
<p className="text-end mt-2">
لا يوجد حساب؟ <Link href="#">تسجيل</Link>
</p>
</div>
</div> 
</form>
</Modal>
</>
);
}
}

export default Signin;