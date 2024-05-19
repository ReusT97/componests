import { useState } from "react";

function Student(props) {
  let live = props.live;
  const [name, setName] = useState(props.name);

  const showAlert = () => {
    setName("Name Updated");
  };
  return (
    <div className="box">
      <p>name : {name}</p>
      <p>live : {live}</p>
    </div>
  );
}

export default Student;
