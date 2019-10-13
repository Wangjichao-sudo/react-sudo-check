import React from 'react';

class Header extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div style={{ background: '#ccc' }}>Header
            {
                this.props.children
            }</div>
        )
    }
};

export default Header;