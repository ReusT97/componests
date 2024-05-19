import Student from "./componests/one/Student";
import Form from "./componests/one/Form";
import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  const addNewMember = (memInfo) => {
    setStudents([...students, memInfo]);
  };

  let contentSection = <p>No Member yet!!</p>;
  if (!students.length < 1) {
    contentSection = students.map((student) => (
      <Student name={student.name} live={student.live} key={student.name} />
    ));
  }

  return (
    <div className="App">
      <section>{contentSection}</section>
      <Form addNewMember={addNewMember} />
    </div>
  );
};

export default App;
