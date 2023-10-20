import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacherAsync } from "./teacherSlice";

export const SingleTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teacher = useSelector(({ teachers }) =>
    teachers.teachers.find((teacher) => teacher._id === id)
  );

  if (!teacher) {
    return <p>Teacher not found!</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteTeacherAsync(id));
    navigate("/teachers");
  };

  return (
    <div>
      <h2>Teacher Detail</h2>
      <div className="details">
        <p>
          <strong>Name: </strong>
          {teacher.name}
        </p>
        <p>
          <strong>Subject: </strong>
          {teacher.subject}
        </p>
        <p>
          <strong>Contact: </strong>
          {teacher.contact}
        </p>

        <Link to={`/teacher/edit/${id}`} state={teacher}>
          <button className="edit">Edit Details </button>
        </Link>

        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};
