import React from 'react';
import ReactDom from 'react-dom';
import { Mcontext } from './config';
import Child from './Child';
class Context extends React.Component {

    render() {
        return (
            <div>Home
                <Mcontext.Provider value={'Context'}>
                    <Child />
                </Mcontext.Provider>
            </div>
        )
    }
};

export default Context;