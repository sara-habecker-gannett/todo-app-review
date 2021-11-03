import React from 'react';
import  { Modal, Typography, Box, TextField } from '@material-ui/core';
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
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Button variant="contained" onClick={handleOpen}>Edit Todo</Button> */}
      <Modal
        open={props.open}
        // onClose={handleClose}
        >
          <Box sx={style}>
            <Typography component={"span"}>
              {/* <Button variant="contained" onClick={handleClose}>Close</Button> */}
              <br />
              <TextField label="Title" value={todoTitle}/><br />
              <TextField value={todoStatus}/>
            </Typography>
          </Box>

      </Modal>
    </>

  )
}

TodoModal.propTypes = {
  todo: PropTypes.object.isRequired,
  open: PropTypes.bool,
};

export default TodoModal;