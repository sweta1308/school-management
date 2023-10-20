import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  teachers: [],
  status: "idle",
  error: null
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get(
      "https://school-management.swetaagarwalla.repl.co/teachers"
    );
    return response.data.teachers;
  }
);

export const addTeacherAsync = createAsyncThunk(
  "teachers/addTeacherAsync",
  async (teacher) => {
    const response = await axios.post(
      "https://school-management.swetaagarwalla.repl.co/teachers",
      teacher
    );
    return response.data.teacher;
  }
);

export const updateTeacherAsync = createAsyncThunk(
  "teachers/updateTeacherAsync",
  async ({ id, updatedTeacher }) => {
    const response = await axios.post(
      `https://school-management.swetaagarwalla.repl.co/teachers/${id}`,
      updatedTeacher
    );
    return response.data.teacher;
  }
);

export const deleteTeacherAsync = createAsyncThunk(
  "teachers/deleteTeacherAsync",
  async (id) => {
    const response = await axios.delete(
      `https://school-management.swetaagarwalla.repl.co/teachers/${id}`
    );
    return response.data.deletedTeacher;
  }
);

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers.push(action.payload);
    },
    [addTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedTeacher = action.payload;
      const index = state.teachers.findIndex(
        (teacher) => teacher._id === updatedTeacher._id
      );
      if (index !== -1) {
        state.teachers[index] = updatedTeacher;
      }
    },
    [updateTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = state.teachers.filter(
        (teacher) => teacher._id !== action.payload._id
      );
    },
    [deleteTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default teachersSlice.reducer;
