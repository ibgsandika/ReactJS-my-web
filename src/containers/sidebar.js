import React, {Component} from 'react';
import './side.css';
import Login from '../components/login_but';
import Regis from '../components/regis_but';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Sidebar extends Component{
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.login = this.login.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.login(user).then(res => {
            if (res) {
                this.props.history.push('/profile')
            }
        })
    }

    login (user) {
        return axios
            .post('http://localhost:5000/users/login', {
                email: user.email,
                password: user.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }    

    render(){
        return(
            <div>
                <div className='side-navbar'>
                    <div class='sidebar'>
                        <div class="card">
                                <div class="card-title">
                                    <h4>WELCOME</h4>  
                                    <form>
                                    <label>Email :</label>
                                    <input id="user-email" class="form-content" onChange={this.onChange} type="email" name="email" autocomplete="on" required/>
                                        <div class="form-border"></div>
                            
                                    <label>Password :</label>
                              
                                    <input id="user-password" class="form-content" type="password" onChange={this.onChange} name="password" required />
                                        <div class="form-border"></div>
                                    {/* <Link to="/"><small class="forgot">Forgot password?</small></Link> */}
                                   <div class="log">
                                         <Login onClick={this.onSubmit}/>
                                         <Regis />
                                   </div>
                                   
                                    
                                    </form>
                                   
                                </div>
                        </div>
                      
                    </div>
                </div>
              
            </div>
        );
        
    }
}

export default Sidebar;