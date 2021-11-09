import { createAsyncThunk } from '@reduxjs/toolkit';
import { onlineUsers } from 'constants/instance';

export const getOnlineUsers = createAsyncThunk('onlineUsers/fetchAll', async (_, thunkApi) => {
  try {
    const response = await onlineUsers.get('/api');

    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});
