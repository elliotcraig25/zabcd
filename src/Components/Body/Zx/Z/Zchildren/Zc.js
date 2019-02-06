import React from 'react';
import axios from 'axios';

class Zc extends React.Component {
    constructor(){
        super()
        this.state = {
            zcText: '',
            z_cur: 'z'
        }
    }
    componentDidMount(){
        let {z_cur} = this.state
        axios.post(`/api/getzc`, {z_cur})
        .then(response=>{
            this.setState({
                zcText: response.data[0].c
            })
        })
    }
    render(){
        return (
            <div className='z_a'>
                {this.state.zcText} 
            </div>
        )
    }
}

export default Zc  