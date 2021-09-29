export const patientState = {
    patient: []
}

export const PatientReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PATIENT':
            return state;

        case 'DELETE_PATIENT':
            return state
        default: 
            return state;

    }
}