
export const isDoctor = () => {
    return process.env.REACT_APP_CLIENT_TYPE.trim().toLowerCase() === 'doctor'
};

export const isPatient = () => {
    return process.env.REACT_APP_CLIENT_TYPE.trim().toLowerCase() === 'patient';
}

export const getClientType = () => {
    return process.env.REACT_APP_CLIENT_TYPE.trim();
}
