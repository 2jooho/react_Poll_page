import React, { Component } from 'react';
import './Poll_template.css';
import logo from './img/logo.png';
import back from './img/back.png';
import round1 from './img/round1.png';
import poll_img from './img/poll_img.png';



class Poll_template extends Component  {
    state={
        name:'',
    }
    
render () {
    const white={
        backgroundColor:'#ffffff'
        
    }
    const page1={
        background: 'linear-gradient( to right, #692D0C 50%, #ffffff 50%  )'
    }
    const braun={
        backgroundColor:'#692D0C'
    }
    const children = this.props
    const name=this.state.name
return(
    <div>
        <div className="top_div"> 
        <div>
        <button className="back_bnt" type="button">
        <img className="back_img" src={back} alt='back'/>
        <text className="back_text">뒤로</text>
        </button>
        </div>

            <img className="logo_img2" src={logo} alt='logo' />
        </div>
        <div className="chapter1" style=
        {
            this.props.children===1
            ? (page1)
            : (braun)
            }
            >
        
        <text className="chapter_text1">취향</text>     
        <img className="round1" src={round1} alt='round' />
        </div>
        <div className="chapter2" style=
        {
            (()=>{
                 if(this.props.children <3 )
                  return (white)
                  if(this.props.children===3)
                    return({ background: 'linear-gradient( to right, #692D0C 10%, #ffffff 90%  )'})
                    if(this.props.children===4)
                    return({ background: 'linear-gradient( to right, #692D0C 20%, #ffffff 80%  )'})
                    if(this.props.children===5)
                    return({ background: 'linear-gradient( to right, #692D0C 30%, #ffffff 70%  )'})
                    if(this.props.children===6)
                    return({ background: 'linear-gradient( to right, #692D0C 40%, #ffffff 60%  )'}) 
                    if(this.props.children===7)
                    return({ background: 'linear-gradient( to right, #692D0C 50%, #ffffff 50%  )'}) 
                    if(this.props.children===8)
                    return({ background: 'linear-gradient( to right, #692D0C 60%, #ffffff 40%  )'})
                    if(this.props.children===9)
                    return({ background: 'linear-gradient( to right, #692D0C 70%, #ffffff 30%  )'})
                    if(this.props.children===10)
                    return({ background: 'linear-gradient( to right, #692D0C 80%, #ffffff 40%  )'})
                    if(this.props.children===11)
                    return({ background: 'linear-gradient( to right, #692D0C 90%, #ffffff 10%  )'}) 
                    else
                    return({braun})             
            })()
            }
            >
        <text className="chapter_text2" style=
        {
            (()=>{
                if(this.props.children >7 )
                 return ({color:'#ffffff'})
           })()
            }
            >상태</text>
        <img className="round1" src={round1} alt='round' />
        </div>
        <div className="chapter3">
        <text className="chapter_text3">용도</text>
        </div>
        <div>
        <img className="main_img" src={poll_img} alt='logo' />
        </div>
        <div>

        </div>
    </div>
);
}
}
export default Poll_template;