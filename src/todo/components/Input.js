import React from 'react';
import PropTypes from 'prop-types';

export default class InputTodo extends React.Component {

    render() {
        return (
            <>
                <input
                    className="input-todo"
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.val}
                    onChange={this.props.change}
                />
            </>
        )
    }
}
InputTodo.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    val: PropTypes.string,
    change: PropTypes.func.isRequired
}