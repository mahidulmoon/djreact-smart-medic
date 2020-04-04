import React,{Component} from 'react';
import axios from 'axios';

class PrescriptionDetails extends Component{
    state={
        prescriptiondtl:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/prescription/prescription/'+this.props.match.params.ptid).then(response => this.setState({ prescriptiondtl:response.data }));
    }

    render(){
        return(
            <div className="hompagebody">
                <h2>Prescription's Details</h2>
                <center>
                    
            <div className="prescriptionbox">
                <div className="informationbox">
                    <p>Prescription ID:  {this.state.prescriptiondtl.id}</p>
                    <p>Patient's Name:  {this.state.prescriptiondtl.ptname}</p>
                    <p>Patient's Contact:  {this.state.prescriptiondtl.ptemail}</p>
                    <p>Prescribed By:  {this.state.prescriptiondtl.doctorname}</p>
                    <p>Disease:  {this.state.prescriptiondtl.diseasename}</p>
                    <p>Disease desciption/category:  {this.state.prescriptiondtl.deaseasedesciptioncategory}</p>
                    <p>Prescribed Medicine:  {this.state.prescriptiondtl.medicinename}</p>
                    <p>Direction to be Followed:  {this.state.prescriptiondtl.directiontopatient}</p>
                    <p><a href={`${this.state.prescriptiondtl.filefield}`}>img link:  {this.state.prescriptiondtl.filefield} CLICK ME </a></p>
                    
                    
                </div>
                <div className="prescriptionimg">
                <p><img src={`${this.state.prescriptiondtl.filefield}`} /></p>
                </div>
            </div>
                    

                    
                </center>
            </div>
        );
    }
}

export default PrescriptionDetails;