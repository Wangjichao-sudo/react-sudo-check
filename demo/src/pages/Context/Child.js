import React from 'react';
import Consumer from './Consumer';

class Child extends React.Component {

    render() {
        return (
            <div>Child
                <Consumer />
            </div>
        )
    }
};

export default Child;