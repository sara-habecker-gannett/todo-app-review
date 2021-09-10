import React, { useEffect } from "react";
import {
  todosAtom,
  incompleteTodosSelector,
  completeTodosSelector
} from "../../atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { Grid } from "@material-ui/core";
import { fetchTodos } from "../../utils";
import TodoItem from "../TodoItem/TodoItem";
import axios from "axios";

function TodoContainer() {
  const incompleteTodos = useRecoilValue(incompleteTodosSelector);
  const completeTodos = useRecoilValue(completeTodosSelector);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const getTodos = async () => {
    const response = await fetchTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  },[]);

  const handleChangeStatus = (newStatus, todo) => {
    const url = `http://localhost:3000/todos/${todo.id}`;
    axios.put(url, {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: newStatus
    })
    .then((response) => {
      const todosCopy = [...todos];
      let foundIndex = todosCopy.findIndex(todoCopy => todo.id === todoCopy.id);
      todosCopy[foundIndex] = response.data;
      setTodos(todosCopy);
    })
    .catch((err) => console.log(err))
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <h3>Incomplete</h3>
            <div data-testid="incomplete-column">
              {incompleteTodos.map((todo) =>
              <div key={todo.id.toString()}> 
                <TodoItem 
                  todo={todo}
                  onChangeStatus={handleChangeStatus}
                />
              </div> 
              )} 
            </div>
          
        </Grid>
        <Grid item xs>
        <div data-testid="complete-column">
          <h3>Complete</h3>
            {completeTodos.map((todo) =>
            <div key={todo.id.toString()}> 
              <TodoItem 
                todo={todo}
                onChangeStatus={handleChangeStatus}
              />
            </div> 
            )} 
          </div>
        </Grid>
     </Grid>
    </div>
  )
}

export default TodoContainer;
