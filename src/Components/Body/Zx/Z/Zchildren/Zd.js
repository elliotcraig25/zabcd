import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateZCur} from '../../../../../Ducks/reducer';

class Zd extends React.Component {
    constructor(){
        super()
        this.state = {
            zdText: '',
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
        axios.post(`/api/getzd`, {z_cur})
        .then(response=>{
            this.setState({
                zdText: response.data[0].d,
                z_cur: this.props.z_cur
            }) 
        })
    }
    updateReduxZCur(){
        this.props.updateZCur(`${this.state.z_cur}d`)
    }
    render(){
        return (
            this.state.zdText ? (
                <div className='z_a' onClick={()=>this.updateReduxZCur()}>
                    {this.state.zdText}
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
export default connect(mapStateToProps, mapDispatchToProps)(Zd)