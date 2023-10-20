import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTeachers } from "./teacherSlice";
import { TeacherTable } from "../../components/TeacherTable";

export const Teachers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teachers, status, error } = useSelector(({ teachers }) => teachers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);
  return (
    <>
      <h2>Teachers</h2>
      <button onClick={() => navigate("/addTeacher")}>Add Teacher</button>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : teachers.length === 0 ? (
            <h3>No Students Found</h3>
          ) : (
            <TeacherTable teachers={teachers} />
          )}
        </div>
      )}
    </>
  );
};
