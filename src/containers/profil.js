import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import './style.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render () {
        return (
            <div className="master">
                <div className='card-profil'>
                        <div className="text_pos">
                            <h1 className="text-center">Profile</h1>
                        </div>
                        <table className="col-md-8 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Email</td>    
                                    <td>{this.state.email}</td>
                                </tr>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                </div>
                   
            </div>
        )
    }
}

export default Profile