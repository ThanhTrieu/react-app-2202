import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonTodo extends React.Component {
    render() {
        return (
            <>
                <button
                    className="btn-todo"
                    type={this.props.type}
                    onClick={() => this.props.click()}
                >
                    {this.props.children}
                </button>
            </>
        )
    }
}
// gan gia tri mac dinh cho props component
ButtonTodo.defaultProps = {
    type: "button"
}
ButtonTodo.propTypes = {
    type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}