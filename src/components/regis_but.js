import React, {Component} from 'react';
import './button.css';
import {Link} from "react-router-dom";
class Regis extends Component{
    render(){
        return(
            <div>
               <div className='but_reg' style={{marginTop: 5}}>
                    <Link to="/register" className="btn regisbut">Register</Link>
               </div>
            </div>
        );
        
        
    }
}

export default Regis;