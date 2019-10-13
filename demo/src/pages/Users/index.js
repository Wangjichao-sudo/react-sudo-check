import React from 'react';
import Header from '../common/Header'
let index = 1;
class Users extends React.Component {
    componentDidMount() {
        // console.log(index)
        // console.log(actions)
    }
    handleGoto = () => {
        index ++;
        this.props.history.push('/users/' + index)
    }
    render() {
        console.log(this.props)
        const { match: { params: { id } } } = this.props;
        return (
            <React.Fragment>Users{id}
            <Header>
                <h1>123</h1>
                <h1>123</h1>
            </Header>
                <button onClick={this.handleGoto}>跳转</button>
                <span>123</span>
            </React.Fragment>
        )
    }
};

export default Users;