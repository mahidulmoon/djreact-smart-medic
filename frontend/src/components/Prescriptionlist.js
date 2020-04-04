import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class PrescriptionList extends Component{
    state={
        prescriptions: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/prescription/prescription/').then(response => this.setState({ prescriptions:response.data }));
    }

    render(){
        return(
            <div className="hompagebody">
                <h2>Registered Prescriptions</h2>
                <center>
                    
                    {this.state.prescriptions.map(prescription =>(
                        <div className="departmentbox">
                            <div className="singledepartmenbox"><p>Prescription ID:{prescription.id}</p><img src="/form.png"/><p>{prescription.ptname}</p><p>{prescription.ptemail}</p><button><Link to={`/prescription/${prescription.id}/`}>Get Prescription</Link></button></div>
                        </div>
                    ))}
                    

                    
                </center>
            </div>
        );
    }
}

export default PrescriptionList;