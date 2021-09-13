import React from "react";
import { URL, fetchTodos } from "../../utils";
import TodoContainer from "./TodoContainer";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { render} from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import "babel-polyfill";

jest.mock("axios");

describe ('<TodoContainer />', () => {
  let component;
  const todos = [
    {
      description: "take out the trash by 4 PM wednesday",
      id: 1,
      status: "complete",
      title: "take out trash"
    },
    {
      description: "get milk, cheese and soda",
      id: 2,
      status: "incomplete",
      title: "go grocery shopping"
    },
    {
      description: "ask about flea meds",
      id: 3,
      status: "incomplete",
      title: "go to vet"
    }
  ]

  const incompleteTodos = todos.filter((todo) => (
    todo.status === 'incomplete'
  ));
  const completeTodos = todos.filter((todo) => (
    todo.status === 'complete'
  ));
  test('todos API is successfully called on page load', async() => {

    axios.get.mockResolvedValueOnce(todos);
    const result = await fetchTodos();
    expect(result).toEqual(todos);
    expect(axios.get).toHaveBeenCalledWith(URL);
  });

  test('todos API fails', async() => {
    const message = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(message));
    const result = await fetchTodos();
    expect(axios.get).toHaveBeenCalledWith(URL);
    expect(result).toEqual([]);
  });

  test('renders the incomplete column', async() => {    
    const todosToDisplay = incompleteTodos.map((todo) => ({
      ...todo,
    }));
    component = TestRenderer.create(
      <RecoilRoot>
        <TodoContainer 
          todo={todosToDisplay}
        />
      </RecoilRoot>
    )
    const testInstance = component.root;
    expect(testInstance.findByType(TodoContainer).props.todo).toHaveLength(2)
  });

  test('renders the complete column', async() => {    
    const todosToDisplay = completeTodos.map((todo) => ({
      ...todo,
    }));
    component = TestRenderer.create(
      <RecoilRoot>
        <TodoContainer 
          todo={todosToDisplay}
        />
      </RecoilRoot>
    )
    const testInstance = component.root;
    expect(testInstance.findByType(TodoContainer).props.todo).toHaveLength(1)
  });
})