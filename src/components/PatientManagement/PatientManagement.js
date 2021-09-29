import React, { useReducer } from 'react';
import { PatientReducer, patientState } from '../PatientReducer/PatientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(PatientReducer, patientState);
    return (
        <div>
            <h1>This is a patient management: {state.patient.length}</h1>
            <form>
                <input value></input>
            </form>
        </div>
    );
};

export default PatientManagement;