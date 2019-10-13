import React from 'react';

class List extends React.Component {

    render() {
        const filterList = React.Children.map(this.props.children, (item, index) => {
            return React.cloneElement(item, {tip: index})
        })
        return (
            <div>List
                {filterList}
            </div>
        )
    }
};

export default List;