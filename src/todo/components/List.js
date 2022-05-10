import React from 'react';
import PropTypes from 'prop-types';

export default class ListTodo extends React.Component {
    render() {
        return (
            <>
                <ul className="list-todo">
                    {this.props.todo.map( item => (
                        <li key={item.id}>
                            <span className={item.done ? 'color-done' : ''}>{item.name}</span>
                            <span onClick={() => this.props.finish(item.id)}>[done]</span>
                            <span onClick={()=> this.props.remove(item.id)} >[delete]</span>
                     </li>
                    ) )}
                </ul>
            </>
        )
    }
}
ListTodo.propTypes = {
    todo: PropTypes.array.isRequired
}