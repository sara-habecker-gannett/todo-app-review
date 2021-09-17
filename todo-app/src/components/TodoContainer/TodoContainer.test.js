import React from "react";
import { URL, fetchTodos } from "../../utils";
import TodoContainer from "./TodoContainer";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { render, waitFor, within } from '@testing-library/react';

import "babel-polyfill";

jest.mock("axios");

describe ('<TodoContainer />', () => {
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

  test('todos API is successfully called on page load', async() => {

    axios.get.mockResolvedValueOnce({data: todos});

    const { getByTestId } = render(
      <RecoilRoot>
        <TodoContainer />
      </RecoilRoot>
    )

    const incomplete = getByTestId('incomplete-column');
    const complete = getByTestId('complete-column');

    const incompleteToDo = await waitFor(() => (
      within(incomplete).getByText(/go grocery shopping/)
    ));

    expect(incompleteToDo).toBeTruthy();

    const completeToDo = await waitFor(() => (
      within(complete).getByText(/take out trash/)
    ));

    expect(completeToDo).toBeTruthy();

  });
})