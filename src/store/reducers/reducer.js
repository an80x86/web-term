const initialState = {
  todoArr: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...newState,
        todoArr: state.todoArr.concat({ item: action.value, key: Date.now() })
      };
    case "DEL_TODO":
      return {
        todoArr : newState.todoArr.filter(item => item.key !== action.value.key)
      }
  }
  return newState;
};

export default reducer;
