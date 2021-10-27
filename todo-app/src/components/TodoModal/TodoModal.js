import React, { useState } from 'react';
import  { Button, Modal, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TodoModal(props) {
  const todoTitle = props.todo.title
  const todoStatus = props.todo.status
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit Todo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        >
          <Box sx={style}>
            <Typography>
              {todoTitle}<br />
              {todoStatus}
            </Typography>
          </Box>

      </Modal>
    </div>
  )
}

TodoModal.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoModal;