import React, {Component} from 'react';
import Poll_template from 'components/Poll_template';
import True_button from 'components/True_button';
import 'components/bnt.css';
import { Link } from 'react-router-dom';


  class Poll_page_4 extends Component {  
    id= 1
    state ={
      page:4,
  
    }
    handleCreate = (data) => {
      const { array } = this.state;
      this.setState({
        array: array.concat({id: this.id++, ...data})
      })
    }
  

  render() {

    const MenuItem = ({active, children, to}) => (
      <Link to={to} >
              {children}
      </Link>
    )
  return (
    
   <div>
    
  <Poll_template>{this.state.page}</Poll_template>
    <div className='qustion'>
       <text className='qustion_text'>나는 붓기를 빼고 싶다.</text>
     </div>
     
    <div>
    <MenuItem to={'/Poll_page_5'}>
      <True_button></True_button>
      </MenuItem>
    </div>

    </div>
    
  
    );
}
}


export default Poll_page_4;