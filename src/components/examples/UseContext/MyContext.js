// MyContext.js
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  users: [],
  loading: true,
  counter:0
};

const SET_USERS = 'SET_USERS';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload,loading:false }; // Set the user data
    case INCREMENT:
        return { ...state, counter: state.counter+1 }; // Set the increment
    case DECREMENT:
            return { ...state, counter: state.counter-1 }; // Set the decrement
    case RESET:
        return { ...state, counter: 0 }; // Set the decrement
    default:
      return state;
  }
};

const MyContext = createContext();

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContext.Provider');
  }
  return context;
};

const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUsers = (users) => dispatch({ type: SET_USERS, payload: users });
  const increment = () => dispatch({ type: INCREMENT });

  const decrement = () => dispatch({ type: DECREMENT });
  const reset = () => dispatch({ type: RESET });


  const value = {
    state,
    actions: { setUsers ,increment,decrement,reset},
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContextProvider, useMyContext };
