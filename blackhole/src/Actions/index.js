export const 
LOGIN = 'LOGIN',
LOGIN_SUCCESS = 'LOGIN_SUCCESS',
LOGIN_FAILURE = 'LOGIN_FAILURE',

REGISTER = 'REGISTER',
REGISTER_SUCCESS = 'REGISTER_SUCCESS',
REGISTER_FAILURE = 'REGISTER_FAILURE',

LOGOUT = 'LOGOUT',
LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
LOGOUT_FAILURE = 'LOGOUT FAILURE',
//CREATE
ADD_POST = 'ADD_POST',
ADD_SUCCESS = 'ADD_SUCCESS',
ADD_FAILURE = 'ADD_FAILURE',
//READ
FETCH_POSTS = 'FETCH_POSTS',
FETCH_SUCCESS = 'FETCH_SUCCESS',
FETCH_FAILURE = 'FETCH_FAILURE',
//UPDATE
UPDATE= 'UPDATE',
UPDATE_SUCCESS = 'UPDATE_SUCCESS',
UPDATE_FAILURE = 'UPDATE_FAILURE',
//DELETE
DELETE = 'DELETE',
DELETE_SUCCESS = 'DELETE_SUCCESS',
DELETE_FAILURE = 'DELETE_FAILURE';

// CONST URL = {BACKEND  ENDPOINT}

//export const register, login, logout, fetch_posts, add_post, update_post, delete_post
// All actions, use thunk to update /render /create/ delete/, run through dispatch .... ie..
const URL = "https://build-week-blackhole.herokuapp.com/api";


export const register = credentials => dispatch => {
   axios
   .post(`${URL}/register`, credentials)
   .then( response => {
       localStorage.setItem('user', JSON.stringify(credentials))
       dispatch({
           type: REGISTER,
           payload: response.data
       });
   });
}



export const addTokenToLocalStorage = store => next => action => {
    if(action.type === LOGIN_SUCCESS) {
      localStorage.setItem('userToken', action.payload.token);
    }
    next(action);
  };





export const addPost = post => dispatch => {
    dispatch({ type: ADD_POST});
    .post(url/holes', post)
    .then (response => {
        dispatch({
            type: ADD_SUCCESS, payload: response.data});

        })
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: ADD_FAILURE, payload: err.data});
        })
};

