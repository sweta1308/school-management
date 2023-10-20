import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAsync } from "./studentSlice";

export const SingleStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(({ students }) =>
    students.students.find((student) => student._id === id)
  );

  if (!student) {
    return <p>Student not found!</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
    navigate("/");
  };

  return (
    <div>
      <h2>Student Detail</h2>
      <div className="details">
        <p>
          <strong>Name: </strong>
          {student.name}
        </p>
        <p>
          <strong>Age: </strong>
          {student.age}
        </p>
        <p>
          <strong>Class: </strong>
          {student.class}
        </p>
        <p>
          <strong>Gender: </strong>
          {student.gender}
        </p>
        <p>
          <strong>Grade: </strong>
          {student.grade}
        </p>
        <p>
          <strong>Attendance: </strong>
          {student.attendance}
        </p>
        <p>
          <strong>Marks: </strong>
          {student.marks}
        </p>

        <Link to={`/student/edit/${id}`} state={student}>
          <button className="edit">Edit Details </button>
        </Link>

        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};
