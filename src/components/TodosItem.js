import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodosItem extends Component {

    getStyle = () => {
        return {
            background: '#f2f2f2',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type='checkbox'
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>


                
            </div>
        )
    }
}


// PropTypes
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0002',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodosItem;
