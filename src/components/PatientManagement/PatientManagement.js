import React, { useReducer, useRef } from "react";
import { PatientReducer, patientState } from "../PatientReducer/PatientReducer";

const PatientManagement = () => {
  const [state, dispatch] = useReducer(PatientReducer, patientState);
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_PATIENT",
      name: nameRef.current.value,
      id: state.patient.length + 1,
    });
    nameRef.current.value = "";
  };
  return (
    <div>
      <h1>This is a patient management: {state.patient.length}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef}></input>
      </form>
      {state.patient.map((pt) => (
        <li key={pt.id}
        onClick={() => dispatch({ type: "DELETE_PATIENT", id: pt.id })}
        >
          
          {pt.name}
        </li>
      ))}
    </div>
  );
};

export default PatientManagement;
