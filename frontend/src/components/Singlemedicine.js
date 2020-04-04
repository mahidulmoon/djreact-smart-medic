import React,{Component} from 'react';

class Singlemedicine extends Component{
    render(){
        const medicines = this.props.medicines;
        return(
            medicines.map(medicine => (
                <div className="departmentbox">
                    <div className="singledepartmenbox"><p>{medicine.name}</p><img src="/pill.png"/><p>{medicine.quantity}</p><p>{medicine.status}</p></div>
                </div>
            ))
            
        );
    }
}

export default Singlemedicine;