import React, { Component } from 'react';
import './Poll_template.css';
import logo from './img/logo.png';
import green_cheak from './img/green_cheak.png';
import cheak from './img/cheak.png';




class Last_page_top extends Component  {
 
    
render () {
 
return(
    <div>
        <div className="top_div"> 
        <div>
        <button className="back_bnt" type="button">
        <img className="back_img" src={cheak} alt='back'/>
        <text className="back_text">다시하기</text>
        </button>
        </div>

            <img className="logo_img2" src={logo} alt='logo' />
            <div>
        <button className="back_bnt" type="button">
        <img className="back_img" src={green_cheak} alt='back'/>
        <text className="back_text">홈페이지 바로가기</text>
        </button>
        </div>
        </div>
       
    </div>
);
}
}
export default Last_page_top;