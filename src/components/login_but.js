import React, {Component} from 'react';
import './button.css';
class Login extends Component{
    render(){
        return(
            <div>
               <div className='but_login'>
                    <button class="loginbut" onClick={this.props.onClick}>Submit</button>
               </div>
            </div>
        );
        
        
    }
}

export default Login;