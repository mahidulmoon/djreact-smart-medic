import React,{Component} from 'react';

class Department extends Component{
    render(){
        return(
            <div className="hompagebody">
                <h2>Departments</h2>
                <center>
                    
                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>Dentistry</p><img src="/doctor.png"/></div>
                    </div>

                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>Cardiology</p><img src="/doctor.png"/></div>
                    </div>

                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>ENT Specialists</p><img src="/doctor.png"/></div>
                    </div>

                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>Astrology</p><img src="/doctor.png"/></div>
                    </div>

                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>Neuroanatomy</p><img src="/doctor.png"/></div>
                    </div>

                    <div className="departmentbox">
                        <div className="singledepartmenbox"><p>Blood Screening</p><img src="/doctor.png"/></div>
                    </div>
                    
                </center>
            </div>
        );
    }
}

export default Department;