import axios from 'axios';

const url = 'http://localhost:5001/posts';

const API = axios.create({baseURL : 'http://localhost:5001/posts' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        req.headers.role = `${JSON.parse(localStorage.getItem('profile')).result.role}`
    }

    return req;
});

export const fetchPosts = () => API.get(url);
export const createPost = (newPost) => API.post(url, newPost);
export const updatePost = (postId, post) => API.patch(`${url}/${postId}`, post);
export const deletePost = (id) => API.delete(`${url}/${id}`);
export const likePost = (id) => API.patch(`${url}/${id}/likePost`);
export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);
export const getPostById = (id) => API.get(`${url}/${id}`);
export const createComment = (postId, comment) => API.post(`${url}/${postId}/comment`,comment);
export const getGuest = (guestName) => API.get(`${url}/profile/${guestName}`);
export const followUser = (userId) => API.put(`${url}/${userId}/follow`);
export const unfollowUser = (userId) => API.put(`${url}/${userId}/unfollow`);
export const userFriends = (userId) => API.get(`${url}/friends/${userId}`);
export const fetchDoubts = () => API.get(`${url}/doubt`);
export const fetcchDoubtById = (id) => API.get(`${url}/doubt/${id}`);
export const createDoubt = (doubt) => API.post(`${url}/doubt`, doubt);
export const postAnswer = (doubtId, doubtAnswer) => API.post(`${url}/doubt/${doubtId}`, doubtAnswer);