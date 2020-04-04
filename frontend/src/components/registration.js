import React,{Component} from 'react';
import axios from "axios";


class Registration extends Component{
    state={
        username:'',password:'',email:'',first_name:'',last_name:''
    };
    inputchanged = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    register = e =>{
            e.preventDefault();
            axios.post('http://127.0.0.1:8000/doctor/doctorregister/', this.state).then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
      };
    
    render(){
        return(
            <div className="hompagebody">
                <div className="page-content">
                    <div className="form-v4-content">
                        <div className="form-left">
                            <h2>INFOMATION</h2>
                            <p className="text-1">1.Unique email id 2.Same Password for both password field 3.Unique username.</p>
                            <p className="text-2"><span>Note:</span> If you already have an account than click the button bellow and Login.</p>
                            <div className="form-left-last">
                                <a href="/login">Have An Account???</a>
                            </div>
                        </div>
                        <form className="form-detail"  id="myform">
                            <h2>REGISTER FORM</h2>
                            <div className="form-row">
                                <label>Username</label>
                                <input type="text" name="username" id="username" value={this.state.username} onChange={this.inputchanged} className="input-text" required />
                            </div>
                            <div className="form-group">
                                <div className="form-row form-row-1 ">
                                    <label >Password</label>
                                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.inputchanged} className="input-text" required />
                                </div>
                                
                                
                            </div>
                            <div className="form-row">
                                <label>Your Email</label>
                                <input type="text" name="email" id="email" value={this.state.email} onChange={this.inputchanged} className="input-text" required />
                            </div>
                            <div className="form-group">				
                                <div className="form-row form-row-1">
                                    <label >First Name</label>
                                    <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={this.inputchanged} className="input-text"  />
                                </div>
                                <div className="form-row form-row-1">
                                    <label >Last Name</label>
                                    <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={this.inputchanged} className="input-text" required />
                                </div>
                            </div>
                            
                            
                            <div className="form-row-last">
                                <input type="submit" name="" className="register" onClick={this.register} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;