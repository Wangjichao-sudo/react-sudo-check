import React from 'react';
import { Mcontext } from './config';

class Consumer extends React.Component {

    render() {
        return (
            <div>
                <Mcontext.Consumer>
                    {value => value}
                </Mcontext.Consumer>
            </div>
        )
    }
};

export default Consumer;