import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_ALL_UPISI } from '../constants/actionTypes';

export default (upisi = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ALL_UPISI:
        return action.payload;
    case LIKE:
      return upisi.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...upisi, action.payload];
    case UPDATE:
      return upisi.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return upisi.filter((post) => post._id !== action.payload);
    default:
      return upisi;
  }
};

