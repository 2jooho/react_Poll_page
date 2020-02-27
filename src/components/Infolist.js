import React, { Component } from 'react';
import Info from './Info';

class Infolist extends Component{
    static defaultProps={
        data: []
    }
render(){
    const {data}=this.props;
    const list = data.map(array => (<Info key={array.id} info={array}/>));

    return(
    <div>{list}</div>
    )
}
}
export default Infolist;