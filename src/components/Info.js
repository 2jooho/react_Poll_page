import React, { Component } from 'react';

class Info extends Component {
    static defaultProps = {
        data:[
            {
                id:0,
                name:'a'
            }
        ] 
   
    }
    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
          };
          const {data} = this.props;
        const list=data.map(info=>(<li key={info.id}>{info.name}</li>))
        console.log(data)
        return(
            <div>
                <ul>{list}</ul>
                
            </div>
  
        );
    }
}
export default Info;