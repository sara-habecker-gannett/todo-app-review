import React, { useState } from 'react';
import StatusToggleButton from '../ToggleButton/StatusToggleButton';
import  { Card, CardContent, CardActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import TodoModal from '../TodoModal/TodoModal';

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  return (
    <div data-testid="todo-item">
      <Card variant="outlined">
        <Button onClick={handleOpen}>Update</Button>
        <TodoModal 
          todo={todo}
          open={open}
        />
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
