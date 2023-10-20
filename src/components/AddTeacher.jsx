import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addTeacherAsync,
  updateTeacherAsync
} from "../features/teacher/teacherSlice";

export const AddTeacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const teacher = state ? state : null;

  const [teacherInput, setTeacherInput] = useState({
    name: teacher ? teacher.name : "",
    subject: teacher ? teacher.subject : "",
    contact: teacher ? teacher.contact : 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teacher) {
      dispatch(
        updateTeacherAsync({ id: teacher._id, updatedTeacher: teacherInput })
      );
      navigate(`/teacher/${teacher._id}`);
    } else {
      dispatch(addTeacherAsync(teacherInput));
      navigate("/teachers");
    }
  };
  return (
    <>
      <h3>{teacher ? "Update" : "Add"} Teacher</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              required
              placeholder="Elena Williams"
              value={teacherInput.name}
              onChange={(e) =>
                setTeacherInput({ ...teacherInput, name: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Subject:{" "}
            <input
              required
              placeholder="Physics"
              value={teacherInput.subject}
              onChange={(e) =>
                setTeacherInput({ ...teacherInput, subject: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Contact:{" "}
            <input
              required
              placeholder="9386423127"
              min={0}
              value={teacherInput.contact}
              onChange={(e) =>
                setTeacherInput({ ...teacherInput, contact: e.target.value })
              }
            />
          </label>
        </div>
        <input type="submit" value={teacher ? "Update" : "Add"} />
      </form>
    </>
  );
};
