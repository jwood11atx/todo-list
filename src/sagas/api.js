require('es6-promise').polyfill();
require('isomorphic-fetch');

export const getTasksAPI = () => {
  return fetch('https://practiceapi.devmountain.com/api/tasks')
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server.')
    }
    return res.json();
  }).then(result => result);
};

export const createTaskAPI = (action) => {
  return fetch('https://practiceapi.devmountain.com/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ title: action.payload }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server.');
    }
    return res.json();
  }).then(result => result);
};

export const detroyTaskAPI = (action) => {
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${action.payload}`, {
    method: 'DELETE',
  }).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server.');
    }
    return res.json();
  }).then(result => result);
};

export const completeTaskAPI = (action) => {
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${action.payload}`, {
    method: 'PUT',
  }).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server.');
    }
    return res.json();
  }).then(result => result);
};

export const updateTaskAPI = (action) => {
  const { id, title, description, completed } = action.payload;
  return fetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, description, completed }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server.')
    }
    return res.json();
  }).then(result => result);
};
