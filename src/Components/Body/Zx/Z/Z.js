import React from 'react';

import Za from './Zchildren/Za';
import Zb from './Zchildren/Zb';
import Zc from './Zchildren/Zc';
import Zd from './Zchildren/Zd';

class Z extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className='z'>
                <Za />
                <Zb />
                <Zc />
                <Zd />
            </div>
        )
    }
}

export default Z