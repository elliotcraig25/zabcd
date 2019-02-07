import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateZCur} from '../../../../../Ducks/reducer';

class Zb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zbText: '',
            z_cur: '',
            text: ''
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
        this.props.updateZCur(`${this.state.z_cur}b`)
    }
    createNewRow(){
        let newZID = `${this.state.z_cur}b`
        console.log(`here it is agin`, newZID)
        axios.post(`/api/create_new_row`, {newZID})
        .then(()=>{
            this.updateReduxZCur()
        }) 
    }
    addOrUpdate(){
        let movingTo = `${this.props.z_cur}b`
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
    handleText(value){
        this.setState({
            text: value
        })
        console.log(this.state.text)
    }
    editDb(){
        // console.log(`editing`)
        let text = this.state.text
        let z_id = this.props.z_cur
        axios.post(`/api/change_zb`, {text, z_id}) 
        .then(()=>console.log(`it is done`)) 
    }
    render(){
        return (
            this.state.zbText ? (
                <div className='z_a' onClick={()=>this.addOrUpdate()}>
                    {this.state.zbText}
                </div>
            ):(
                <div className='z_a'>
                    Edit
                    <input onChange={e=>this.handleText(e.target.value)}/>
                    <button onClick={()=>this.editDb()}>do the edit</button> 
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