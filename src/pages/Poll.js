import React, {Component} from 'react';
import Poll_template from 'components/Poll_template';
import Template from 'components/Template';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import 'components/bnt.css';
import Info from 'components/Info';
//const Poll = () => {
  class Poll extends Component {  
    id= 1
    constructor(props) {
      super(props);
      this.state={
        page:1,
        information:[
          {
            id:0,
            name:'',
          }
        ]
      }
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
      <div>
      <MenuItem to={'/Poll_page_2'}>
      <Button  onCreate={this.handleCreate} text={"단맛이 나면서 무난함을 즐기는 분"}>
      부드러운 '한방'향</Button>
      <Button onCreate={this.handleCreate} text={"새콤한 향과 맛을 느끼고 싶으신 분"}>향긋한 '가향'차</Button>
      <Button onCreate={this.handleCreate} text={"한방 차 특유의 쓴 맛을 즐기는 분"}>은은한 향</Button>
    </MenuItem>
    </div>

    </div>
    );
  }
}


export default Poll;