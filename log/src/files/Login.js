import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/login.css';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
import Logined from '../files/Logined.js';
// const db = require('../Express/connection');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail_id: '',
      password: '',
      current_password: '',
      isvalid: 'false',
    };
    this.Submit = this.Submit.bind(this);
  }

  onChangeMail_id = (event) => {
    console.log(event.target.value);
    this.setState({ mail_id: event.target.value });
  };

  onChangePassword = (event) => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  onChangeCurrentPassword = (event) => {
    console.log(event.target.value);
    this.setState({ current_password: event.target.value });
  };

  // Submit = async (event) => {
  //   // authentication part...
  //   event.preventDefault();
  //   let { data } = await axios.get(`api/users/${this.state.mail_id}`);
  //   console.log(data);
  // };

  async Submit(event) {
    event.preventDefault();
    console.log('hello sir am here...');
    console.log(this.state.mail_id);
    let val = `api/users/${this.state.mail_id}`;
    console.log(val);
    let { data } = await axios.get(`api/users/${this.state.mail_id}`);
    let user = data.user[0];
    if (user.Email_id === this.state.mail_id) {
      if (user.password === this.state.password) {
        if (user.current_password === this.password) {
          alert('logined');
        } else {
          console.log('not login');
        }
      } else {
        console.log('not login');
      }
    } else {
      console.log('not login');
    }
    // let { email_id, handle } = user;
  }

  render() {
    return (
      <div className='login_container'>
        <form className='flex form' onSubmit={this.Submit}>
          <ParticlesBg num={50} type='circle' bg={true} />
          <label className='flex_row'>
            <div>Enter your Email_id:</div>
            <input
              type='Mail_id'
              name='Mail_id'
              placeholder='Write Your Mail_id...'
              value={this.state.mail_id}
              className='search_input'
              onChange={this.onChangeMail_id}
            />
          </label>
          <label className='flex_row'>
            <div>Password:</div>
            <input
              type='Password'
              name='Password'
              placeholder='Write Your Password...'
              value={this.state.password}
              className='search_input'
              onChange={this.onChangePassword}
            />
          </label>
          <label className='flex_row'>
            <div>Confirm Password:</div>
            <input
              type='CPassword'
              name='CPassword'
              placeholder='Write Your Confirm Password...'
              value={this.state.current_password}
              className='search_input'
              onChange={this.onChangeCurrentPassword}
            />
          </label>
          <div className='btn'>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              className='flex_row'
            >
              {/* <Link to='/login'>Login</Link> */}
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
