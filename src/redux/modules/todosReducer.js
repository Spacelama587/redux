

// Action 
const ADD_TODO = "ADD_TODO";

// Action 2
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    title,
  },
});

// Initial state
const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Redux",
    },
  ],
};

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todosReducer;