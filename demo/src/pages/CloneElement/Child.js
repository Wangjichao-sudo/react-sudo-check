import React from 'react';

class Child extends React.Component {

    render() {
        return (
            <div>Child
                {this.props.tip}
            </div>
        )
    }
};

export default Child;