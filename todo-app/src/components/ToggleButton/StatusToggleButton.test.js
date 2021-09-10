import React from "react";
import { render, fireEvent } from '@testing-library/react';
import StatusToggleButton from './StatusToggleButton';

describe('<StatusToggleButton />', () => {

  test('toggle renders with 2 switches', () => {
    const mockCallBack = jest.fn();
    const { getByText } = render(<StatusToggleButton 
      onChangeStatus={mockCallBack}
      todoStatus={"incomplete"}
   />)
    expect(getByText('Done')).toBeInTheDocument();
    expect(getByText('Incomplete')).toBeInTheDocument();
  })

  test('test click on complete, should return incomplete', () => {
    const mockCallBack = jest.fn();
    const { getByElementId } = render(<StatusToggleButton 
      onChangeStatus={mockCallBack}
      todoStatus={"complete"}
   />)

    const incompleteToggle = document.getElementById('incomplete-toggle');
    fireEvent.click(incompleteToggle);
    expect(mockCallBack).toHaveBeenCalledTimes(1)
    expect(mockCallBack).toHaveBeenCalledWith(expect.anything(), 'incomplete')
  })

  test('test click on incomplete, should return complete', () => {
    const mockCallBack = jest.fn();
    const { getByElementId } = render(<StatusToggleButton 
      onChangeStatus={mockCallBack}
      todoStatus={"incomplete"}
   />)

    const completeToggle = document.getElementById('complete-toggle');
    fireEvent.click(completeToggle);
    expect(mockCallBack).toHaveBeenCalledTimes(1)
    expect(mockCallBack).toHaveBeenCalledWith(expect.anything(), 'complete')
  })

});