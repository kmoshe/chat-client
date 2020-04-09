export const updatePatientConnected = room => ({
    type: 'PATIENT_CONNECTED',
    room
});

export const updatePatientDisconnected = room => ({
    type: 'PATIENT_DISCONNECTED',
    room
});

export const updateDoctorDetails = doctor => ({
    type: 'DOCTOR_DETAILS',
    doctor
});

export const updatePatientMessage = chatMessage => ({
    type: 'CHAT_MESSAGE',
    chatMessage
});