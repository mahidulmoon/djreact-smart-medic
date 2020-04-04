import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Singleappoinment extends Component{
    render(){
        const appoinments = this.props.appoinments;
        return(
            appoinments.map(appoinment =>(
                <div className="departmentbox">
                    <div className="singledepartmenbox"><p>{appoinment.ptname}</p><img src="/stethoscope.png"/><p>{appoinment.ptphnno}</p><p>{appoinment.ptappdate}({appoinment.ptstbltime})</p><button><Link to={`/prescription/${appoinment.ptname}/${appoinment.ptphnno}/`}>Give Prescription</Link></button></div>
                </div>
            ))
        );
    }
}

export default Singleappoinment;