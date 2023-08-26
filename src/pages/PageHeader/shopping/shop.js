import React from 'react';
import { Link } from 'react-router-dom';
import './shop.css';

function AppShop(props) {
return (
<>
<div className='shopping-cart'>
<div className='shopping'>   
<Link to={'/'} > الرئيسية /</Link> 
<p >  عربة التسوق الخاصة بك </p>
</div>
<div className='cart-content'>
<h3 className='cart-h'>محتويات عربة التسوق </h3>
<p className="cart-p">عربة التسوق فارغة </p>
</div>
</div>
</>
)
}
export default AppShop;