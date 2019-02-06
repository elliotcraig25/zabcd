import React from 'react';

import Z from './Z/Z';
import X from './X/X';

class Zx extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className='z_x'>
                <Z />
                <X />
            </div>
        )
    }
}

export default Zx