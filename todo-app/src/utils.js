import axios from "axios";
import "babel-polyfill";

export const URL = `http://localhost:3000/todos`

export const fetchTodos = async () => {
  try {
    return await axios.get(URL);
  } catch (e) {
    return [];
  }
}