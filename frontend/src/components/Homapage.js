import React,{Component} from 'react';

class Homapage extends Component{
    render(){
        return(
            <div>
                <div className="navigationmenu">
                <div className="navigationimg">
                    <img src="/logo.png"/>
                </div>
                <nav>
                    <li><a href="/"><img src="/pin.png" />Home</a></li>
                    <li><a href="/prescriptionlist"><img src="/pin.png" />Get Prescription</a></li>
                    <li><a href="/doctorlist"><img src="/pin.png" />Available Doctors</a></li>
                    <li><a href="/bookapoinment"><img src="/pin.png" />Book Appoinment</a></li>
                    <li><a href="/medicineshop"><img src="/pin.png" />Medicine Shop</a></li>
                    <li><a href="/registration"><img src="/pin.png" />Create Account</a></li>
                    <li><a href="/login"><img src="/pin.png" />LogIn</a></li>
                </nav>
            </div>
            {this.props.children}
            </div>
        )
    }
}

export default Homapage;