import React from 'react';
import axios from 'axios';

class Zd extends React.Component {
    constructor(){
        super()
        this.state = {
            zdText: '',
            z_cur: 'z'
        }
    }
    componentDidMount(){
        let {z_cur} = this.state
        axios.post(`/api/getzd`, {z_cur})
        .then(response=>{
            this.setState({
                zdText: response.data[0].d
            })
        })
    }
    render(){
        return (
            <div className='z_a'>
                {this.state.zdText}
            </div>
        )
    }
}

export default Zd