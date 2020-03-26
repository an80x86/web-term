export const onAddTodo = val => {
  return { type: "ADD_TODO", value: val };
};

export const onDelTodo = val => {
  return { type: "DEL_TODO", value: val };
};
