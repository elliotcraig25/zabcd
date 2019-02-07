import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Y extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zText: '',
            arrOfText: [],
            z_cur: ''
        }
    }
    componentDidUpdate(){
        if(this.state.z_cur!==this.props.z_cur){
            this.getTheInfo()
        }
    }
    getZDataA(){
        let {z_cur} = this.props
        axios.post(`/api/getza`, {z_cur})
        .then(response=>{
            this.setState({
                zText: response.data[0].a,
                z_cur: this.props.z_cur
            }) 
            console.log(this.state.zText)
        })
    }
    getTheInfo(){
        let z_cur = this.props.z_cur.split('')
        let lastLetter = z_cur.pop()
        if(lastLetter==='a'){
            this.getZDataA()
        }else if(lastLetter==='b'){
            console.log('it is b')
        }else if(lastLetter==='c'){
            console.log('it is c')
        }else if (lastLetter==='d'){
            console.log('it is c')
        }
        console.log(z_cur.join(''))
        console.log(lastLetter)
    }
    render(){
        return (
            <div className='y'>
                Y
            </div>
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
export default connect(mapStateToProps)(Y)