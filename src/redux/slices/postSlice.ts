import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "../../api/api";
import { post } from "../../constants/Post";

export const fetchGetPosts = createAsyncThunk(
  'Posts/fetchGetPosts',
  async () => {   
    const res = await getPost()
    return res.data
  }
)


interface postSliceType {
  postData: post[],
}



const postSlice = createSlice({
  name: 'post',
  initialState: {
    postData: []
  } as postSliceType,
  reducers: {},
  extraReducers: (builder) =>  {
    builder.addCase(fetchGetPosts.fulfilled, (state, action) => {
      state.postData = action.payload
    })
  }
})


export const postReducer = postSlice.reducer