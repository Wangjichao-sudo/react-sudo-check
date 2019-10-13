import React from 'react';
import Child from '../CloneElement/Child'
class CreateRef extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.div = React.createRef();
        this.Child = React.createRef();
    }
    componentDidMount() {
        console.log(this.inputRef)
        console.log(this.div)
        console.log(this.Child)
        console.log(Child)
        console.log(React.isValidElement(this.div.current))
        console.log(React.isValidElement(<Child tip={1} />))
    }
    render() {
        return (
            <div>CreateRef
                <input ref={this.inputRef} />
                <div ref={this.div}>CreateRef</div>
                <Child ref={this.Child} tip={1} />
            </div>
        )
    }
};

export default CreateRef;