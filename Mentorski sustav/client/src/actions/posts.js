import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_ALL_USERS, FETCH_ALL_PREDMETI, FETCH_ALL_UPISI } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


export const getPredmeti = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPredmeti();

    dispatch({ type: FETCH_ALL_PREDMETI, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPredmet = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPredmet(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePredmet = (id, predmet) => async (dispatch) => {
  try {
    const { data } = await api.updatePredmet(id, predmet);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
  updatePredmet(id,predmet);
};

export const likePredmet = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePredmet(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePredmet = (id) => async (dispatch) => {
  try {
    await await api.deletePredmet(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUser();

    dispatch({ type: FETCH_ALL_USERS,payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createUpis = (id_p,id_u) => async (dispatch) => {
  try {
    const { data } = await api.createUpis(id_p,id_u);
    
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUpisi = (id_u) => async (dispatch) => {
  try {
    const { data } = await api.fetchUpisi(id_u);
    
    
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUpisi = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUpisi();
    dispatch({ type: FETCH_ALL_UPISI, payload: data });
  } catch (error) {
    console.log(error);
  };
  }