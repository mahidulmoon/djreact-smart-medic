import React,{Component} from 'react';

class ChangePass extends Component{
    render(){
        return(
            <div classNameName="homepagebody">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/login/images/img-02.png" alt="IMG" />
                            </div>

                            <form className="login100-form validate-form" method="post" action="">
                                
                                <span className="login100-form-title">
                                    Change Password
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="username" placeholder="Username" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" name="password2" placeholder="New Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Submit
                                    </button>
                                </div>
                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        User
                                    </span>
                                    <a className="txt2" href="/login">
                                        Login?
                                    </a>
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

export default ChangePass;