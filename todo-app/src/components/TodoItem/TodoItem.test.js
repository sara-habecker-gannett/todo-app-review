import React from "react";
import { render} from '@testing-library/react';
import TodoItem from './TodoItem';

describe ('<TodoItem/>', () => {
  let component;
  const todoItemData = {
    description: "sweep the floor",
    id: 1,
    status: "incomplete",
    title: "clean living room"
  }
  test('renders a todo item', () => {
    component = render(
      <TodoItem todo={todoItemData} />
    )
    const item = component.getAllByTestId('todo-item')
    expect(item).toHaveLength(1)
    const itemDetails = component.getByText('clean living room: sweep the floor')
    expect(itemDetails).toBeTruthy();
  })
})
