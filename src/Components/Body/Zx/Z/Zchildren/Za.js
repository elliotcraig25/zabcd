import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateZCur} from '../../../../../Ducks/reducer';

class Za extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zaText: '',
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
        axios.post(`/api/getza`, {z_cur})
        .then(response=>{
            this.setState({
                zaText: response.data[0].a,
                z_cur: this.props.z_cur
            }) 
        })
    }
    updateReduxZCur(){
        this.props.updateZCur(`${this.state.z_cur}a`)
    }
    createNewRow(){
        let newZID = `${this.state.z_cur}a`
        // console.log(`here it is agin`, newZID)
        axios.post(`/api/create_new_row`, {newZID})
        .then(()=>{
            this.updateReduxZCur()
        }) 
    }
    addOrUpdate(){
        let movingTo = `${this.props.z_cur}a`
        axios.post(`/api/does_z_id_exist`, {movingTo})
        .then(response=>{
            // console.log(response.data[0])
            if(response.data[0]){
                this.updateReduxZCur()
            }else{
                // console.log('does not exist')
                this.createNewRow()
            }
        })
    }
    render(){
        return (
            this.state.zaText ? (
                <div className='z_a' onClick={()=>this.addOrUpdate()}>
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
    // console.log(z_cur) 
    return {
        z_cur
    }
}
const mapDispatchToProps = {
    updateZCur
}
export default connect(mapStateToProps, mapDispatchToProps)(Za)