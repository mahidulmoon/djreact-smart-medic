import React,{Component} from 'react';
import Singledoctor from './Singledoctor';
import axios from 'axios';

class Doctorlist extends Component{
    state={
        doctors:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/doctor/doctorlist/').then(response => this.setState({ doctors:response.data }));
    }

    render(){
        return(
            <div>
            <div className="hompagebody">
                <h2>Registered Doctor's</h2>
                <center>
                    
                    
                <Singledoctor
                    doctors={this.state.doctors}
                />
                    
                    
                </center>
            </div>
        </div>
        );
    }
}

export default Doctorlist;