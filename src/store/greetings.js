import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_GREETING = 'hello/api/v1/greetings';
const initialState = {};

export const fetchGreeting = createAsyncThunk(GET_GREETING, async () => {
  const data = await fetch('http://localhost:3000/api/v1/greetings');
  const response = await data.json();
  return response;
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GREETING}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
