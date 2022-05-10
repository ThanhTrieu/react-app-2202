import React from 'react';
import HeaderTodo from './partials/Header';
import FooterTodo from './partials/Footer';
import PropTypes from 'prop-types';

import './styles/layout.css';


class LayoutTodo extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <HeaderTodo/>
                    {this.props.children}
                    <FooterTodo/>
                </div>
            </>
        )
    }
}
LayoutTodo.propTypes = {
    children: PropTypes.element.isRequired
}
export default LayoutTodo;