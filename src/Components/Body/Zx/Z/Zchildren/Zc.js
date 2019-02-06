import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateZCur} from '../../../../../Ducks/reducer';

class Zc extends React.Component {
    constructor(){
        super()
        this.state = {
            zcText: '',
            z_cur: ''
        }
    }
    componentDidMount(){
        this.getZData()
    }
    componentDidUpdate(){
        if(this.state.z_cur!==this.props.z_cur){
            this.getZData()
        }
    }
    getZData(){
        let {z_cur} = this.props
        axios.post(`/api/getzc`, {z_cur})
        .then(response=>{
            this.setState({
                zcText: response.data[0].c,
                z_cur: this.props.z_cur
            }) 
        })
    }
    updateReduxZCur(){
        this.props.updateZCur(`${this.state.z_cur}c`)
    }
    render(){
        return (
            this.state.zcText ? (
                <div className='z_a' onClick={()=>this.updateReduxZCur()}>
                    {this.state.zcText} 
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
    // console.log(z_cur) 
    return {
        z_cur
    }
}
const mapDispatchToProps = {
    updateZCur
}
export default connect(mapStateToProps, mapDispatchToProps)(Zc)