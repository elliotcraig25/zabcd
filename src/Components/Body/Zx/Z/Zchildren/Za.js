import React from 'react';
import axios from 'axios';

class Za extends React.Component {
    constructor(){
        super()
        this.state = {
            zaText: '',
            z_cur: 'z'
        }
    }  
    componentDidMount(){
        let {z_cur} = this.state
        axios.post(`/api/getza`, {z_cur})
        .then(response=>{
            this.setState({
                zaText: response.data[0].a
            })
        })
    }
    render(){
        return (
            this.state.zaText ? (
                <div className='z_a'>
                    {this.state.zaText}
                </div>
            ):(
                <div className='z_a'>
                    Edit
                </div>
            )
        )
    }
}

export default Za