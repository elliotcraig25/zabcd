import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Za extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zaText: '',
        }
    }  
    componentDidMount(){
        let {z_cur} = this.props
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
const mapStateToProps = (state) => {
    const {z_cur} = state
    console.log(z_cur)
    return {
        z_cur
    }
}
export default connect(mapStateToProps)(Za)