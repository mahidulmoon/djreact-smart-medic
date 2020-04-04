import React,{Component} from 'react';
import Singleappoinment from './Singleappoinment';
import axios from 'axios';

class Doctorlist extends Component{
    state={
        appoinments:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/appoinment/appoinment/').then(response => this.setState({ appoinments:response.data }));
    }

    render(){
        return(
            <div>
            <div className="hompagebody">
                <h2>Appoinments </h2>
                <h5>Waiting for</h5>
                <center>
                    
                    <Singleappoinment appoinments={this.state.appoinments} />
                
                    
                    
                </center>
            </div>
        </div>
        );
    }
}

export default Doctorlist;