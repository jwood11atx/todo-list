const initialState = {
  tasks: [],
  selectedTaskId: null,
  selectedTask: {},
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TASKS': {
      const { selectedTaskId } = state;
      if (selectedTaskId) {
        const tasks = action.payload;
        const idx = tasks.findIndex(task => task.id === selectedTaskId);
        const selectedTask = tasks[idx];
        return { ...state, tasks, selectedTask }
      }
      return { ...state, tasks: action.payload };
    }
    case 'SELECT_TASK': {
      return {
        ...state,
        selectedTaskId: action.payload.id,
        selectedTask: action.payload,
      }
    }

    default:
      return state;
  }
};

export default todoList;
