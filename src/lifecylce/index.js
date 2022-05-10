import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

export default class AppDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    showHide = () => {
        // cap nhat lai state
        this.setState(state => ({ show: !state.show }))
    }

    render(){
        console.log('Content render');
        return (
            <>
                <HeaderComponent show={this.state.show} />
                {this.state.show && (
                    <div style={{width: '300px', height: '300px', backgroundColor: 'yellow'}}></div>
                )}
                    
                <button onClick={() => this.showHide()}> Show/Hide </button>
                <FooterComponent/>
            </>
        )
    }
}