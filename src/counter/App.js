// trien khai class component
import React from 'react';
// import component
import ButtonCounter from './components/Button';
import ResultCounter from './components/Result';

export default class AppCounter extends React.Component {
    constructor(props) {
        // override
        super(props);
        // su dung lai props trong contructor cua React

        // khai bao thuoc tinh co ten la state va gan gia tri cho no bang 1 object
        this.state = {
            count: 0
        }
        //this.changeCount = this.changeCount.bind(this);
    }

    changeCount = (val, type) => {
        // cap nhat thay doi state
        // click + thi tang gia tri count val don vi
        // click - thi giam gia tri count val don vi
        // can biet gia tri hien tai ???
        if(type === 0){
            //this.setState({count: this.state.count - val});
            this.setState((state, props) => ({ count: state.count - val }) );
        } else if(type === 1){
            this.setState({count: this.state.count + val});
        }
    }

    // chi goi trong class component - ke thua cua React.Component
    render() {
     // hien thi React DOM (JSX)
     return (
        <React.Fragment>
            <h1> App Counter</h1>
            {/* goi component ra su dung */}
            <ResultCounter res={this.state.count} />
            {/* + va - goi la props children */}
            <ButtonCounter
                type="button"
                class="btn"
                click={this.changeCount}
                name={1}
            > + </ButtonCounter>
            <ButtonCounter
                type="button"
                class="btn-info"
                click={this.changeCount}
                name={0}
            > - </ButtonCounter>
        </React.Fragment>
     )
    }
}