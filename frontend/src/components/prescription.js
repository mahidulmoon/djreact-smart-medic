import React,{Component} from 'react';
import axios from 'axios';

class Prescription extends Component{
    state={
        ptname:'',ptemail:'',doctorname:'',diseasename:'',deaseasedesciptioncategory:'',medicinename:'',directiontopatient:''//,image: null
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      };
    
      handleImageChange = (e) => {
        this.setState({
          image: e.target.files
        })
      };

    prescriptionpost = e =>{
      e.preventDefault();
    //console.log(this.state);
    let form_data = new FormData();
    
    form_data.append('ptname', this.state.ptname);
    form_data.append('ptemail', this.state.ptemail);
    form_data.append('doctorname', this.state.doctorname);
    form_data.append('diseasename', this.state.diseasename);
    form_data.append('deaseasedesciptioncategory', this.state.deaseasedesciptioncategory);
    form_data.append('medicinename', this.state.medicinename);
    form_data.append('directiontopatient', this.state.directiontopatient);
    //form_data.append('image', this.state.image, this.state.image.name);
    
    let url = 'http://127.0.0.1:8000/prescription/prescription/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };
    
    
    render(){
        return(
            <div classNameName="homepagebody">
                <div className="containerc">
                    <div className="complainPage">
                        <h2> Patient's Prescription </h2>
                        <form  enctype="multipart/form-data" >
                            <label for="name">Patient Name:{this.props.match.params.ptname}</label>
                            <input type="text" name="ptname" id="ptname" required="required" autocomplete="off" onChange={this.handleChange} value={this.state.ptname} />
                            <label for="email">Patient Phn:{this.props.match.params.ptphnno}</label>
                            <input type="text" name="ptemail" id="ptemail" required="required" autocomplete="off" onChange={this.handleChange} value={this.state.ptemail} />
                            <label for="doctorname">Doctor Name</label>
                            <input type="text" name="doctorname" id="doctorname" required="required" autocomplete="off" onChange={this.handleChange} value={this.state.doctorname} />
                            <label for="diseasename"> Disease Name </label>
                            <input type="text" name="diseasename" id="diseasename" required="required" autocomplete="off" onChange={this.handleChange} value={this.state.diseasename} placeholder="Disease Name"/>
                            <label for="deaseasedesciption-category">Disease Description or category </label>
                            <input type="text" name="deaseasedesciptioncategory" id="area" required="required" autocomplete="off" onChange={this.handleChange} value={this.state.deaseasedesciptioncategory}  placeholder="Enter category"/>
                            <label for="medicinename">Prescribed Medicine Name </label>
                            <input type="text" required="required" id="medicinename"  name="medicinename" autocomplete="off" onChange={this.handleChange} value={this.state.medicinename}  placeholder="Enter Medicine Name"/>
                            <label for="advicetopatien">Direction To Follow </label>
                            <textarea  required="required" id="directiontopatient" name="directiontopatient" autocomplete="off" onChange={this.handleChange} value={this.state.directiontopatient} placeholder="Enter Direction to the patient" > </textarea>
                            
                            
                            <input type="submit" value="Submit" onClick={this.prescriptionpost} required />
                            
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Prescription;
//<label for="file">Upload File/Image </label>
//<input type="file"  id="image" accept="image/png, image/jpeg" multiple={true} onChange={this.handleImageChange} required/> 
                            