import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import { Students } from "./features/student/Students";
import { Teachers } from "./features/teacher/Teachers";
import { School } from "./features/school/School";
import { Class } from "./features/student/Class";
import { AddStudent } from "./components/AddStudent";
import { AddTeacher } from "./components/AddTeacher";
import { SingleStudent } from "./features/student/SingleStudent";
import { SingleTeacher } from "./features/teacher/SingleTeacher";

export default function App() {
  return (
    <div className="App">
      <h1>SCHOOL MANAGEMENT</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/school" element={<School />} />
        <Route path="/class" element={<Class />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/student/edit/:id" element={<AddStudent />} />
        <Route path="/addTeacher" element={<AddTeacher />} />
        <Route path="/teacher/edit/:id" element={<AddTeacher />} />
        <Route path="/student/:id" element={<SingleStudent />} />
        <Route path="/teacher/:id" element={<SingleTeacher />} />
      </Routes>
    </div>
  );
}
