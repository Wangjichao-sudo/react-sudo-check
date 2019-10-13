import React from 'react';
import Child from './Child';
import List from './List';
class CloneElement extends React.Component {

    render() {
        const cloneChild = React.cloneElement(<Child />, {tip: 1})
        return (
            <div>CreatElement
                <Child tip={2} />
                {cloneChild}
                <List>
                    <Child tip={2} />
                    <Child tip={2} />
                    <Child tip={2} />
                </List>
            </div>
        )
    }
};

export default CloneElement;