import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCourses } from "../../api/api";
import { course } from "../../constants/List";

export const fetchGetCourses = createAsyncThunk(
  'courses/fetchGetCourses',
  async () => {   
    const res = await getCourses()
    return res.data
  }
)


interface courseSliceType {
  coursesData: course[],
}



const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    coursesData: []
  } as courseSliceType,
  reducers: {},
  extraReducers: (builder) =>  {
    builder.addCase(fetchGetCourses.fulfilled, (state, action) => {
      state.coursesData = action.payload
    })
  }
})


export const coursesReducer = coursesSlice.reducer