import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchUser = () => API.get('/posts/user');


export const fetchPredmeti = () => API.get('/posts/predmet');
export const createPredmet = (newPost) => API.post('/posts/predmet', newPost);
export const likePredmet = (id) => API.patch(`/posts/predmet/${id}/likePost`);
export const updatePredmet = (id, updatedPost) => API.patch(`/posts/predmet/${id}`, updatedPost);
export const deletePredmet = (id) => API.delete(`/posts/predmet/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const createUpis = (id_p,id_u) => API.post(`/user/predmet/${id_p}/${id_u}`);
export const fetchUpisi = (id_u) => API.get(`/user/predmet/Upisi/${id_u}`);
export const fetchAllUpisi = () => API.get(`/user/predmet/Upisi`);
