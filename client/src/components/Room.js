import React from 'react';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';
import Styled from 'styled-components';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'

class Room extends React.Component {
  state = { count: 0, room: [] }

  componentDidMount() {
    axios.get('api/rooms')
      .then(res => {
        this.setState({room: res.data})
      })
  }
  countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  countDown = () => {
    if (this.state.count <= 0)
    {
      return null
    } else {
    this.setState({count: this.state.count - 1})
    }
  }
  
  dropDown = () => {
    debugger
    const { room } = this.state;
    room.map(function(r, index){
      <option value={r.value}>{r.text}</option>
    })
  }

  render(){
    const { room } = this.state;

    return(
      <div>
        <div>
         Room #: <Dropdown options={room}/>
        </div>
        <button onClick={this.countUp}>
          <Image pic={Plus} />
        </button>
        <Count>
         Count: {this.state.count}
        </Count>
        <button onClick={this.countDown}>
          <Image pic={Minus} />
        </button>
      </div>

    )
  }
}

const Count = Styled.div`
  font-size: 20pt;
  padding: 20px;
`

const Image = Styled.div`
  background-image: url(${props => props.pic});
  color: black;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 100px;
`

export default Room;