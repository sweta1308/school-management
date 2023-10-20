import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudents } from "./studentSlice";
import { StudentTable } from "../../components/StudentTable";

export const Students = () => {
  const navigate = useNavigate();
  const { students, error, status } = useSelector(({ students }) => students);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);
  return (
    <>
      <h2>Students</h2>
      <button onClick={() => navigate("/addStudent")}>Add Student</button>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : students.length === 0 ? (
            <h3>No Students Found</h3>
          ) : (
            <StudentTable students={students} />
          )}
        </div>
      )}
    </>
  );
};
