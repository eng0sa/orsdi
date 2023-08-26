import React from "react";
import jsoncard from '../cardData.json'
import CardSection from './cardSection';
import { Link } from "react-router-dom";


function NewCard() {
  return (
    <>
     
      <div className="section-title">
        <div className="decor-line"></div> 
        <h3>وصلت حديثا</h3>
        <div className="decor-line"></div>
      </div>
       <div className="show-all">
        <Link>عرض الكل</Link>
      </div>
      <div className="cards" >
      <CardSection cardsData={jsoncard} /></div>
    </>
  )
}
export default NewCard;
