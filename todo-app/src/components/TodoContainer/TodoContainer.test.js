import React from "react";
import { URL, fetchTodos } from "../../utils";
import TodoContainer from "./TodoContainer";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { render} from '@testing-library/react';
import "babel-polyfill";

jest.mock("axios");

describe ('<TodoContainer />', () => {
  let component;
  test('todos API is successfully called on page load', async() => {
    const todos = [
      {
        description: "take out the trash by 4 PM wednesday",
        id: 1,
        status: "complete",
        title: "take out trash"
      }
    ]
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

  test('renders the incomplete and complete column', () => {
    component = render(
        <RecoilRoot>
          <TodoContainer />
        </RecoilRoot>
    )
    const incompleteColumn = component.getAllByTestId('incomplete-column')
    expect(incompleteColumn).toBeTruthy()

    const completeColumn = component.getAllByTestId('complete-column')
    expect(completeColumn).toBeTruthy()
  });
})