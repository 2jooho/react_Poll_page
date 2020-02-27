import React,{Component} from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';
import './bnt.css';

class Button extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:this.props.children
        }
    }
  
  handleClick = () => {
  
      this.setState({
        name: this.props.children
    })
      this.props.onCreate(this.state);
      console.log(this.state.name)
     
  }

        render(){
            
            const Wrapper = styled.div`
            width: 25%;
            height: 25rem;
            float:left;
            left:7%;
            margin: 1.5%;
            background: "#ffffff";
            color: "#5D5D5D";
            border-radius:20px;
            border: 5px solid #692D0C;
            display: inline-block;
            text-align: center;
            font-size: 2.5rem;
            padding-top: 2rem;
            cursor: pointer;
            user-select: none;
            transition: .2s all;

        position:relative;
        
            &:hover {
                background: ${"#692D0C"};
                color: ${"#ffffff"};
                ${shadow(0)}
                .div_text{
                    background: ${"#692D0C"};
                    color: #ffffff;
                    border: 1px solid #ffffff;
                }   
            }
            
        `;
        
        const  {children,text, onClick} = this.props

            return(
                <div>

                    <div >
                        <Wrapper onClick={this.handleClick}>
                            {children}
                        <div className="div_text">
                            <text className="text">{text}</text>
                        </div>
                        </Wrapper>
                        </div>

                        </div>
            );
        }
    }
    
export default Button;
