import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../student/studentSlice";
import { setTopStudent, updateSchoolStats } from "./schoolSlice";

export const School = () => {
  const dispatch = useDispatch();
  const {
    school,
    students: { students }
  } = useSelector(({ school, students }) => ({
    school,
    students
  }));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  useEffect(() => {
    const totalStudents = students.length;
    const topStudent = students.reduce(
      (acc, curr) => (curr.marks > (acc.marks ?? 0) ? curr : acc),
      ""
    );
    const totalAttendance = students.reduce(
      (sum, curr) => sum + parseFloat(curr.attendance ?? 0),
      0
    );
    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.reduce(
      (sum, curr) => sum + parseFloat(curr.marks ?? 0),
      0
    );
    const averageMarks = totalMarks / totalStudents;

    dispatch(
      updateSchoolStats({
        totalStudents,
        topStudent,
        averageAttendance,
        averageMarks
      })
    );
    dispatch(setTopStudent(topStudent));
  }, [students, dispatch]);

  return (
    <div>
      <h2>School</h2>
      <div className="details">
        <p>
          <strong>Total Students: </strong>
          {school?.totalStudents}
        </p>
        <p>
          <strong>Top Student: </strong>
          {school?.topStudent ? school?.topStudent.name : "-"}
        </p>
        <p>
          <strong>Average Attendance: </strong>
          {school?.averageAttendance.toFixed(2)}
        </p>
        <p>
          <strong>Average Marks: </strong>
          {school?.averageMarks.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
