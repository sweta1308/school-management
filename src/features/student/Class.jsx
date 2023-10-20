import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  setClassFilter,
  setGenderFilter,
  setSort
} from "./studentSlice";
import { StudentTable } from "../../components/StudentTable";

export const Class = () => {
  const dispatch = useDispatch();
  const { students, classFilter, genderFilter, sort } = useSelector(
    ({ students: { students, classFilter, genderFilter, sort } }) => ({
      students,
      classFilter,
      genderFilter,
      sort
    })
  );

  const classStudents = students.filter((student) =>
    classFilter === "All" ? true : student.class === classFilter
  );
  const filteredStudents = classStudents.filter((student) =>
    genderFilter === "All" ? true : student.gender === genderFilter
  );
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sort === "Name") {
      return a.name.localeCompare(b.name);
    }
    if (sort === "Age") {
      return b.age - a.age;
    }
    if (sort === "Attendance") {
      return b.attendance - a.attendance;
    }
    if (sort === "Marks") {
      return b.marks - a.marks;
    }
    return 0;
  });

  const handleClassChange = (e) => dispatch(setClassFilter(e.target.value));
  const handleGenderChange = (e) => dispatch(setGenderFilter(e.target.value));
  const handleSortChange = (e) => dispatch(setSort(e.target.value));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="page">
      <h2>Class</h2>

      <div>
        <div className="filter">
          <label htmlFor="class">
            <strong>Class: </strong>
          </label>
          <select id="class" onChange={handleClassChange}>
            <option value="All">All</option>
            <option value="I">Std I</option>
            <option value="II">Std II</option>
            <option value="III">Std III</option>
            <option value="IV">Std IV</option>
            <option value="V">Std V</option>
            <option value="VI">Std VI</option>
            <option value="VII">Std VII</option>
            <option value="VIII">Std VIII</option>
            <option value="IX">Std IX</option>
            <option value="X">Std X</option>
            <option value="XI">Std XI</option>
            <option value="XII">Std XII</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="filter">
            <strong>Filter by Gender: </strong>
          </label>
          <select id="filter" onChange={handleGenderChange}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="sort">
            <strong>Sort by: </strong>
          </label>
          <select id="sort" onChange={handleSortChange}>
            <option value="All">All</option>
            <option value="Name">Name</option>
            <option value="Age">Age</option>
            <option value="Attendance">Attendance</option>
            <option value="Marks">Marks</option>
          </select>
        </div>
      </div>
      {sortedStudents.length === 0 ? (
        <h3>No Students Found!</h3>
      ) : (
        <StudentTable students={sortedStudents} />
      )}
    </div>
  );
};
