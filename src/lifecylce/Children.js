import React from 'react';

class ChildrenComponent extends React.PureComponent {

    componentWillUnmount(){
        // khong cap nhat setState o day
        // xu ly cac logic gi do truoc component bi mat - huy
        console.log('ChildrenComponent unmounted');
    }

    render() {
        return (
            <h2> This is a child component</h2>
        )
    }
}
export default ChildrenComponent;