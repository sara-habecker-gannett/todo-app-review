import { atom, selector } from 'recoil';

export const todosAtom = atom({
  key: "todos",
  default: [],
});

export const incompleteTodosSelector = selector({
  key: "incompleteTodos",
  get: ({ get }) => {
    const items = get(todosAtom);
    const incompleteItems = items.filter((item) => (
      item.status === 'incomplete'
    ));

    return incompleteItems;
  },
});

export const completeTodosSelector = selector({
  key: "completeTodos",
  get: ({ get }) => {
    const items = get(todosAtom);
    const completeItems = items.filter((item) => (
      item.status === 'complete'
    ));

    return completeItems;
  },
});
