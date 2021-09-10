import React, { useState } from 'react';
import StatusToggleButton from '../ToggleButton/StatusToggleButton';
import  { Card, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';

function TodoItem({ todo, onChangeStatus }) {

  const [status, setStatus] = useState(todo.status);

  const updateTodo = (newStatus, todo) =>{
    setStatus(newStatus);
    onChangeStatus(newStatus, todo);
  };

  const handleToggle = () => {
    if (status === "complete") {
      updateTodo("incomplete", todo);
    } else {
      updateTodo("complete", todo);
    }
  };

  return (
    <div data-testid="todo-item">
      <Card variant="outlined">
        <CardContent align="center">
          {todo.title}: {todo.description} 
        </CardContent>
        <CardActions>
          <StatusToggleButton 
            todoStatus={status}
            onChangeStatus={handleToggle}
          />
        </CardActions>
      </Card>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TodoItem;
