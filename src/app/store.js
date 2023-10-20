import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "../features/student/studentSlice";
import { teachersSlice } from "../features/teacher/teacherSlice";
import { schoolSlice } from "../features/school/schoolSlice";

export default configureStore({
  reducer: {
    students: studentsSlice.reducer,
    teachers: teachersSlice.reducer,
    school: schoolSlice.reducer
  }
});
