import { Link } from "react-router-dom";

export const TeacherTable = ({ teachers }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Contact</th>
          </tr>
          {teachers?.map(({ _id, name, subject, contact }) => (
            <tr key={_id} className="student-list">
              <td>
                <Link to={`/teacher/${_id}`}>{name}</Link>
              </td>
              <td>
                <Link to={`/teacher/${_id}`}>{subject}</Link>
              </td>
              <td>
                <Link to={`/teacher/${_id}`}>{contact}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
