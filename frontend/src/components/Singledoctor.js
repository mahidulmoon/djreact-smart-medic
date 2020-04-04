import React,{Component} from 'react';

class Singledoctor extends Component{
    render(){
        const doctors = this.props.doctors;
        return(
            doctors.map(doctor =>(
                <div className="departmentbox">
                    <div className="singledepartmenbox"><p>{doctor.fullname}</p><img src="/doctor.png"/><p>{doctor.achievement}</p><p>{doctor.dept}</p></div>
                </div>
            ))
        );
    }
}

export default Singledoctor;