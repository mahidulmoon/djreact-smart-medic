import React,{Component} from 'react';
import axios from 'axios';

class Login extends Component{
    state={
        username:'',password:''
    }
    inputChanged= e =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    login= e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/', this.state).then((response) => {
            console.log(response.data.token);
          }, (error) => {
            console.log(error);
          });
    }

    render(){
        return(
            <div classNameName="hompagebody">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/img-02.png" alt="IMG" />
                            </div>

                            <form className="login100-form validate-form" >
                                <span className="login100-form-title">
                                    User Login
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="username" value={this.state.username} onChange={this.inputChanged} placeholder="Username" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" name="password" value={this.state.password} onChange={this.inputChanged} placeholder="Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={this.login}>
                                        Login
                                    </button>
                                </div>

                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        Forgot
                                    </span>
                                    <a className="txt2" href="/changepass">
                                        Password?
                                    </a>
                                </div>
                                <div>
                            </div>
                                <div className="text-center p-t-136">
                                    <a className="txt2" href="/registration">
                                        Create your Account
                                        <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;