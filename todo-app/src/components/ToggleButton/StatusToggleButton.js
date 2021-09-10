import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PropTypes from 'prop-types';

function StatusToggleButton({ todoStatus, onChangeStatus }) {
  return (
    <div data-testid="status-toggle">
      <ToggleButtonGroup
        value={todoStatus}
        exclusive
        onChange={onChangeStatus}
      >
        <ToggleButton
          value="incomplete"
          id="incomplete-toggle"
          disabled={todoStatus === "incomplete"}
        >
          Incomplete
        </ToggleButton>
        <ToggleButton
          value="complete"
          id="complete-toggle"
          disabled={todoStatus === "complete"}
        >
          Done
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

StatusToggleButton.propTypes = {
  todoStatus: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default StatusToggleButton;
