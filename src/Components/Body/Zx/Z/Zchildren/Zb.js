import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateZCur} from '../../../../../Ducks/reducer';

class Zb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zbText: '',
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
        axios.post(`/api/getzb`, {z_cur})
        .then(response=>{
            this.setState({
                zbText: response.data[0].b,
                z_cur: this.props.z_cur
            }) 
        })
    } 
    updateReduxZCur(){
        this.props.updateZCur('zb')
    }
    render(){
        return (
            this.state.zbText ? (
                <div className='z_a' onClick={()=>this.updateReduxZCur()}>
                    {this.state.zbText}
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
export default connect(mapStateToProps, mapDispatchToProps)(Zb)