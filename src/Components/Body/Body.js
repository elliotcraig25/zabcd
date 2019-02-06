import React from 'react';

import Zx from './Zx/Zx'
import Y from './Y/Y'

class Body extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className='body'>
                <div className='x_y_z_container'>
                    <Zx />
                    <Y />
                </div>
            </div>
        )
    }
}

export default Body;