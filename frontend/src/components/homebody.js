import React,{Component} from 'react';
import axios from 'axios';
import Singlemedicine from './Singlemedicine';
class Homebody extends Component{
    state={
        medicines:[]
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/medicine/list/').then(response => this.setState({ medicines:response.data }));
    }
    render(){
        return(
            <div>
                <div className="hompagebody">
                    <h2>Medicine</h2>
                    <center>
                        
                        <Singlemedicine 
                         medicines={this.state.medicines} 
                        />

                        
                        
                    </center>
                </div>
            </div>
        )
    }
}

export default Homebody;