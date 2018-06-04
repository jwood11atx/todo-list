const initialState = {
  tasks: [],
};

const todoList = (state = initialState, action) => {
  const tasks = [...state.tasks];

  switch (action.type) {
    case 'CREATE_TODO': {
      tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });

      return { tasks };
    }
    case 'DESTROY_TODO': {
      const idx = action.payload;

      return {
        tasks: [
          ...tasks.slice(0, idx),
          ...tasks.slice(idx + 1, tasks.length),
        ]
      };
    }
    case 'COMPLETE_TODO': {
      const idx = action.payload;

      tasks[idx].completed = true;

      return { tasks };
    }
    default:
      return state;
  }
};

export default todoList;
