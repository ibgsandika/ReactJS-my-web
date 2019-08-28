import React, {Component} from 'react';
import './side.css';
import Login from '../components/login_but';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Regis extends Component{
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.regis = this.regis.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }

        this.regis(newUser).then(res => {
            if (res) {
                this.props.history.push('/')
            }
        })
    }

    regis (newUser) {
        return axios
            .post('http://localhost:5000/users/register', {
                email: newUser.email,
                password: newUser.password,
                first_name: newUser.first_name,
                last_name: newUser.last_name
            })
            .then(res => {
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
                        <div class="card-regis">
                                <div class="card-title">
                                    <h4>REGISTER ACCOUNT</h4>  
                                    <form>
                                    <label>First name:</label>
                                    <input id="user-email" class="form-content" onChange={this.onChange} type="text" name="first_name" autocomplete="on" required/>
                                        <div class="form-border"></div>
                                        <label>Last name :</label>
                                    <input id="user-email" class="form-content" onChange={this.onChange} type="text" name="last_name" autocomplete="on" required/>
                                        <div class="form-border"></div>
                                    <label>Email :</label>
                                    <input id="user-email" class="form-content" onChange={this.onChange} type="email" name="email" autocomplete="on" required/>
                                        <div class="form-border"></div>
                            
                                    <label>Password :</label>
                                    <input id="user-password" class="form-content" type="password" onChange={this.onChange} name="password" required />
                                        <div class="form-border"></div>
                                        
                                   <div class="log">
                                         <Login onClick={this.onSubmit}/>
                                        
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

export default Regis;