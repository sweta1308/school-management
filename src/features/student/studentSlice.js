import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  students: [],
  status: "idle",
  error: null,
  classFilter: "All",
  genderFilter: "All",
  sort: "Select"
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://school-management.swetaagarwalla.repl.co/students"
    );
    return response.data.data;
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudentAsync",
  async (student) => {
    const response = await axios.post(
      "https://school-management.swetaagarwalla.repl.co/students",
      student
    );
    return response.data.data;
  }
);

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudentAsync",
  async ({ id, updatedStudent }) => {
    console.log(id, updatedStudent);
    const response = await axios.post(
      `https://school-management.swetaagarwalla.repl.co/students/${id}`,
      updatedStudent
    );
    return response.data.data;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudentAsync",
  async (id) => {
    const response = await axios.delete(
      `https://school-management.swetaagarwalla.repl.co/students/${id}`
    );
    return response.data.data;
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setClassFilter: (state, action) => {
      state.classFilter = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students.push(action.payload);
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedStudent = action.payload;
      const index = state.students.findIndex(
        (student) => student._id === updatedStudent._id
      );
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    },
    [updateStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = state.students.filter(
        (student) => student._id !== action.payload._id
      );
    },
    [deleteStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export const {
  setClassFilter,
  setGenderFilter,
  setSort
} = studentsSlice.actions;

export default studentsSlice.reducer;
