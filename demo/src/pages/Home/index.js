import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        //直接插入dom节点到body下
        if(!this.node){
            this.node = document.createElement("div");

            document.body.appendChild(this.node);
        }
        this.state = {
            visible: false,
            num: 0
        }
    }
    componentDidMount() {
        // const { num } = this.state;
        
        // this.setState({
        //     num: this.state.num+1
        // })
        console.log(this.state.num)
        // this.setState((state) => {
        //    return { num: state.num+1 }
        // })
        // console.log(this.state.num)
        new Promise((resolve) => {
            resolve()
        }).then(() => {
            this.setState({
                num: this.state.num+1
            })
            console.log(this.state.num)
            this.setState({
                num: this.state.num+1
            })
            console.log(this.state.num)
        })
        
        console.log(this.state.num)
        this.setState({
            num: this.state.num+1
        }, () => {
            console.log(this.state.num)
        })
    }
    handleGoTo = () => {
        console.log(this.props)
        // this.props.history.push('/users/1')
        this.setState(({visible}) => ({
            visible: !visible
        }))
    }
    render() {
        console.log(React)
        console.log(ReactDom)
        const { visible } = this.state;
        const wrapper = <div style={{height: '100%',width: '100%', position: 'fixed', left: 0, background: '#ccc'}}></div>

        return (
            <div>Home
                <button onClick={this.handleGoTo}>123</button>
                {visible && ReactDom.createPortal(wrapper, this.node)}
                {this.state.num}
            </div>
        )
    }
};

export default Home;