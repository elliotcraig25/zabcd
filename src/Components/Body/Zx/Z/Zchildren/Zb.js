import React from 'react';
import axios from 'axios';

class Zb extends React.Component {
    constructor(){
        super()
        this.state = {
            zbText: '',
            z_cur: 'z'
        }
    }
    componentDidMount(){
        let {z_cur} = this.state
        axios.post(`/api/getzb`, {z_cur})
        .then(response=>{
            this.setState({
                zbText: response.data[0].b
            })
        })
    }
    render(){
        return (
            <div className='z_a'>
                {this.state.zbText}
            </div>
        )
    }
}

export default Zb