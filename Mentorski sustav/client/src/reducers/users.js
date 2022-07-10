import {  CREATE, UPDATE, DELETE, LIKE, FETCH_ALL_USERS } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case LIKE:
      return users.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return users.filter((post) => post._id !== action.payload);
    default:
      return users;
  }

  
};






  