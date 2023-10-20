import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addStudentAsync,
  updateStudentAsync
} from "../features/student/studentSlice";

export const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const student = state ? state : null;

  const [studentInput, setStudentInput] = useState({
    name: student ? student.name : "",
    age: student ? student.age : 0,
    grade: student ? student.grade : "O",
    gender: student ? student.gender : "Male",
    attendance: student ? student.attendance : 0,
    marks: student ? student.marks : 0,
    class: student ? student.class : "I"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      dispatch(
        updateStudentAsync({ id: student._id, updatedStudent: studentInput })
      );
      navigate(`/student/${student._id}`);
    } else {
      dispatch(addStudentAsync(studentInput));
      navigate("/");
    }
  };
  return (
    <>
      <h3>{student ? "Update" : "Add"} Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              required
              placeholder="Emily Brown"
              value={studentInput.name}
              onChange={(e) =>
                setStudentInput({ ...studentInput, name: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Age:{" "}
            <input
              required
              placeholder="20"
              type="number"
              min={0}
              value={studentInput.age}
              onChange={(e) =>
                setStudentInput({ ...studentInput, age: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>Gender:</label>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Male"
                onChange={(e) =>
                  setStudentInput({ ...studentInput, gender: e.target.value })
                }
                checked={studentInput.gender === "Male"}
              />{" "}
              Male
            </label>
          </span>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={(e) =>
                  setStudentInput({ ...studentInput, gender: e.target.value })
                }
                checked={studentInput.gender === "Female"}
              />{" "}
              Female
            </label>
          </span>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Other"
                onChange={(e) =>
                  setStudentInput({ ...studentInput, gender: e.target.value })
                }
                checked={studentInput.gender === "Other"}
              />{" "}
              Other
            </label>
          </span>
        </div>
        <div>
          <label>Class: </label>
          <select
            required
            onChange={(e) =>
              setStudentInput({ ...studentInput, class: e.target.value })
            }
            value={studentInput.class}
          >
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
        <div>
          <label>Grade: </label>
          <select
            required
            onChange={(e) =>
              setStudentInput({ ...studentInput, grade: e.target.value })
            }
            value={studentInput.grade}
          >
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="E+">E+</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <div>
          <label>
            Attendance:{" "}
            <input
              required
              placeholder="96"
              type="number"
              min={0}
              onChange={(e) =>
                setStudentInput({ ...studentInput, attendance: e.target.value })
              }
              value={studentInput.attendance}
            />
          </label>
        </div>
        <div>
          <label>
            Marks:{" "}
            <input
              required
              placeholder="500"
              type="number"
              min={0}
              onChange={(e) =>
                setStudentInput({ ...studentInput, marks: e.target.value })
              }
              value={studentInput.marks}
            />
          </label>
        </div>
        <input type="submit" value={student ? "Update" : "Add"} />
      </form>
    </>
  );
};
