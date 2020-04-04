import React,{Component} from 'react';
import axios from 'axios';

class BookAppoinment extends Component{
    state={
        ptname:'',ptage:'',ptphnno:'',ptemail:'',ptappdate:'',ptstbltime:'' 
        
    }

    

    
    inputchanged = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    appoinmentpost= e =>{
        
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/appoinment/appoinment/', this.state).then((response) => {
            console.log(response);
        }, (error) => {
            console.error(error);
        });
        window.location.reload(false);
        
  };

    render(){
        return(
            <div classNameName="hompagebody">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="popup_box ">
                            <div className="popup_inner">
                                <h3>
                                    Book an 
                                <span>Appointment</span>
                                </h3>
                                <form>
                                    <div className="row">
                                        
                                        <div className="col-xl-9">
                                            <input type="text" name="ptname" value={this.state.ptname} onChange={this.inputchanged} placeholder="Your name " />
                                        </div>
                                        <div className="col-xl-3">
                                            <input type="text" name="ptage" value={this.state.ptage} onChange={this.inputchanged} placeholder="Your age" />
                                        </div>
                                        <div className="col-xl-6">
                                            <input type="text" name="ptphnno" value={this.state.ptphnno} onChange={this.inputchanged} placeholder="Phone number " />
                                        </div>
                                        <div className="col-xl-6">
                                            <input type="email" name="ptemail" value={this.state.ptemail} onChange={this.inputchanged} placeholder="Email Address" />
                                        </div>
                                        <div className="col-xl-6">
                                            <input className="datepicker" name="ptappdate" value={this.state.ptappdate} onChange={this.inputchanged} placeholder="Appointment Date" />
                                        </div>
                                        <div className="col-xl-6">
                                            <input className="timepicker" name="ptstbltime" value={this.state.ptstbltime} onChange={this.inputchanged} placeholder="Suitable time" />
                                        </div>
                                        <div className="col-xl-12">
                                            <input type="submit" name="" className="boxed-btn3" onClick={this.appoinmentpost} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookAppoinment;