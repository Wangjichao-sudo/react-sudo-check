import React from 'react';
import Header from '../common/Header'

class Info extends React.Component {
    render() {
        return (
            <div>
                <Header />
                Info
                {
                    this.props.children
                }
            </div>
        )
    }
};

export default Info;