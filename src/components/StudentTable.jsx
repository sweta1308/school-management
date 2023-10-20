import { Link } from "react-router-dom";

export const StudentTable = ({ students }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Attendance</th>
            <th>Marks</th>
          </tr>
          {students?.map(
            ({
              _id,
              name,
              age,
              grade,
              gender,
              attendance,
              marks,
              class: std
            }) => (
              <tr key={_id} className="student-list">
                <td>
                  <Link to={`/student/${_id}`}>{name ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{age ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{std ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{gender ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{grade ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{attendance ?? "-"}</Link>
                </td>
                <td>
                  <Link to={`/student/${_id}`}>{marks ?? "-"}</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
