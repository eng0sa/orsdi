import React from "react";
import { Link } from "react-router-dom";
import './payment.css';

function Payment() {
return (
<>
<div className="Payment">
<h3 className="page-title"> طرق الدفع</h3> 
<p className="payment-explain">بعد اكمال عمل الطلبية الخاصة بك من خلال موقع او تطبيق اورزدي او من خلال التواصل مع فريق خدمة عملاء اورزدي من خلال المحادثة على الموقع او الفيسبوك مسنجر او الانستغرام او الهاتف او الايميل او اي وسيلة اخرى بامكانك الدفع باستخدام احد الطرق التالية: </p>
<p className="number-payment">الدفع عند الاستلام</p>
<p  className="details-payment">بامكانك الدفع عند استلام الطلبية الخاصة بك عن طريق الدفع بالكاش الى مندوب التوصيل</p>
<p className="number-payment">الدفع الالكتروني</p>
<p >بامكانك الدفع الكترونيا باستخدام اي بطاقة ائتمانية عالمية بعد اضافة المنتجات الى العربة واكمال عملية الشراء</p>
<p className="details-payment" >او الدفع من خلال الجوجل باي او الابل باي Google Pay or Apple Pay</p>
<p className="number-payment">التحويل الالكتروني</p>
<p >بامكانك التحويل الكترونياَ الى اوزردي من خلال الخدمات الموجودة من الرابط ادناه:</p>
<Link className="details-payment">https://orisdi.com/pay</Link>
<p className="details-payment">في حالة وجود اي اسئلة اخرى الرجاء ارسال ايميل على support@orisdi.com او الاتصال على 07833500360 او 07833500367 او 07709908882</p>
</div>
</>
)
}
export default Payment