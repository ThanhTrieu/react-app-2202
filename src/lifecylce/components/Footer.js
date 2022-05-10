import React from 'react';

/*
export default class FooterComponent extends React.PureComponent {

    render() {
        console.log('FooterComponent render');
        return (
            <h2>This is a footer</h2>
        )
    }
}
*/
const FooterComponent = () => {
    console.log('FooterComponent render');
    return (
        <h2>This is a footer</h2>
    )
}
export default React.memo(FooterComponent);