/*
const Result = (props) => {
    // tat ca cac porps tu ben ngoai truyen vao component se nhan duoc tham props
    // no la 1 object
    console.log(props);
    return (
        <p>count:  {props.res}</p>
    )
}
export default Result;
*/
import React from 'react';
export default class Result extends React.Component {

    render(){
        return (
            <p>count:  {this.props.res}</p>
        )
    }
}