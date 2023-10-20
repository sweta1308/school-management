import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalStudents: 0,
  topStudent: null,
  averageAttendance: 0,
  averageMarks: 0
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    updateSchoolStats: (state, action) => {
      const {
        totalStudents,
        topStudent,
        averageAttendance,
        averageMarks
      } = action.payload;
      state.totalStudents = totalStudents;
      state.topStudent = topStudent;
      state.averageAttendance = averageAttendance;
      state.averageMarks = averageMarks;
    },
    setTopStudent: (state, action) => {
      state.topStudent = action.payload;
    }
  }
});

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions;

export default schoolSlice.reducer;
