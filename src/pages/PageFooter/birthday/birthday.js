import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './birthday.css'
function Birthday() {
return(
<>
<div className="birthday-page">
<h1>عيد ميلادك شوكت ؟</h1> 
<p className="bd-date">ادخل تاريخ ميلادك لكي نرسل لك كود خصم رائع في يوم عيد ميلادك</p>
<div className="bd-form">
<Form.Label htmlFor="inputfirstname"> الاسم الاول</Form.Label>
<Form.Control
type="first-name"
className="data"/>
<br />
<Form.Label htmlFor="data"> اللقب او الاسم الاخير</Form.Label>
<Form.Control
type="first-name"
className="data"/>
<br />
<Form.Label htmlFor="data"> الايميل</Form.Label>
<Form.Control
type="first-name"
className="data"/>
</div>
<p className="date-birthday">تاريخ ميلادك</p>
<div className="date-births">
<Form.Control className="input-births" placeholder="ddd" />
<br/>
<Form.Control className="input-births" placeholder="mmm" />
<br/>
<Form.Control className="input-births" placeholder="yyy" />
</div>
</div>
<div className="btn-primary" >
<Button variant="primary" size="lg" className="subscribe">اشترك الان في نادي عيد الميلاد</Button>
</div>
</>
)
}
export default Birthday;