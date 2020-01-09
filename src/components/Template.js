import React, { Component } from 'react';
import logo from './img/logo.png'
import total from './img/total.png'
import round1 from './img/round1.png'
import round2 from './img/round2.png'
import round3 from './img/round3.png'
import './Template.css';
import { NavLink } from 'react-router-dom';
class Template extends Component {

    render() {
        return (
            <div>
            <div className="logo">
            <img className="logo_img"src={logo} alt='logo' />
        </div>
      
        <div className="title">
            <h1>나에게 맞는 추천 캡슐</h1>
        </div>
           <div className="total">
            <img className="total_img" src={total} alt='img' />
        </div>

        <div className="small_title">
            <h1>설문조사를 통해 나의 입맛에 맞는 티캡슐을 알려드립니다.</h1>
        </div>

        <div classNmae="round">
            <img className="round_img1" src={round1} alt='img1' />
            <img className="round_img2" src={round2} alt='img2' />
            <img className="round_img3" src={round3} alt='img3' />
        </div>
        <div className="time">
            <h1>예상 소요시간 : 약 2분</h1>
        </div>

        <div className="btn_div">
        <NavLink exact to="/Poll">
        <button type="button" className="btn" >시 작</button>
        </NavLink>
        </div>
        </div>
        );
      }
    }
export default Template;