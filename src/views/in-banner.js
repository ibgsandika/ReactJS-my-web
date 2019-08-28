import React, {Component} from 'react';
import './inside.css';
class Body extends Component{

    state = {
        content:[
            {id: 1, value:'Ida Bagus', umur:12},
            {id: 2, value:'Andika',umur:17},
            {id: 3, value:'Putra',umur:20}
        ]
    }





    render(){
        return(
            <div>
                <div className='inbody'>
                    <div className='bodyback'>
                    {
                        this.state.content.map(i => (
                            <div className='card'>
                                <div className='head-card'>
                                    
                                </div>
                                <div className='foot-card'>
                                    <p>No : {i.id}</p>
                                    <p>Nama : {i.value}</p>
                                    <p>Umur :{i.umur}</p>
                                            
                                </div>
                             </div>
                        ))
                    }
                    </div>
                
                        
                </div>
              
            </div>
        );
        
    }
}

export default Body;