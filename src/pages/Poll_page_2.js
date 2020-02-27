import React, {Component} from 'react';
import Poll_template from 'components/Poll_template';
import Button from 'components/Button';
import 'components/bnt.css';
import { Link } from 'react-router-dom';
import Info from 'components/Info';

  class Poll_page_2 extends Component {  
    id= 1
    
    state={
      page:2,
      information:[
        {
          id:0,
          name:'',
        }
      ]
      
    } 
    handleCreate = (data) => {
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data })
      }) 
    }
  

  render() {

    const MenuItem = ({active, children, to}) => (
      <Link to={to} className="menu-item">
              {children}
      </Link>
    )
  return (
    
   <div>
  <Poll_template>{this.state.page}</Poll_template>
    <div style={{ marginTop:'1rem'}}>

    <MenuItem to={'/Poll_page_3'}>
      <Button onCreate={this.handleCreate}  text={"단맛이 나면서 무난함을 즐기는 분"}>
      한국적이고 고소한 맛</Button>
      <Button onCreate={this.handleCreate}  text={"새콤한 향과 맛을 느끼고 싶으신 분"}>진한 바디감</Button>
      <Button onCreate={this.handleCreate}  text={"한방 차 특유의 쓴 맛을 즐기는 분"}>항상 가볍게 마실 수 있는 차</Button>
    </MenuItem>
  
    </div>
    </div>
    

    );
}
}


export default Poll_page_2;