import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Result from './Result';

let userInfo = [] ;

class Form extends Component {

  state={
    name: null,
    uid: null,
    add: null,
    des: null,
    skill: null,
  }
  
  handleSubmit = () =>{
    console.log(this.state);
    userInfo.push(this.state);
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleUidChange = (event) => {
    this.setState({uid: event.target.value})
  }

  handleAddChange = (event) => {
    this.setState({add: event.target.value})
  }

  handledesChange = (event) => {
    this.setState({des: event.target.value})
  }

  handleSkillChange = (event) => {
    this.setState({skill: event.target.value})
  }

  render(){
  return (
    <div style={{textAlign: 'center'}}>
          <h1>Enter Your Details Here</h1>
          <TextField
            id="name"
            label="Name"
            onBlur={(e) => {this.handleNameChange(e, 'name')}}
            margin="normal"
          /><br/>
          <TextField
            id="uid"
            label="UserId"
            onBlur={(e) => {this.handleUidChange(e, 'uid')}}
            margin="normal"
          /><br/>
          <TextField
            id="add"
            label="Address"
            onBlur={(e) => {this.handleAddChange(e, 'add')}}
            margin="normal"
          /><br/>
          <TextField
            id="des"
            label="Designation"
            onBlur={(e) => {this.handledesChange(e, 'des')}}
            margin="normal"
          /><br/>
          <TextField
            id="skill"
            label="Skills(seperated by ',')"
            onBlur={(e) => {this.handleSkillChange(e, 'skill')}}
            margin="normal"
          /><br/><br/>
          <Button variant="contained" onClick={this.handleSubmit}>
          SUBMIT
          </Button><br/><br/>
          <Result data={userInfo} />
    </div>
  );
}
}

export default Form;
