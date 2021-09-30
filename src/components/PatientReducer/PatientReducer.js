export const patientState = {
    patient: []
}

export const PatientReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name,
            }
            const allPatients = [...state.patient, newPatient]
            return {patient: allPatients};

        case 'DELETE_PATIENT':
            const remaining = state.patient.filter(pt => pt.id !== action.id );
            const newState = {patient: remaining}
            return newState;
        default: 
            return state;

    }
}