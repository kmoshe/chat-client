import axios from "axios";

const createDoctorNamespace = async () => {
    const response = await axios.get(`http://localhost:3030/999999999`);
    const data = await response.data;
    return data || {}
}

const getAppointments = async (id, facility, role) => {
    const response = await axios.get('http://localhost:4000/appointments/');
    const data = await response.data;
    return data || {}
}

const getDoctorAppointments = async (id, facility, role) => {
    const response = await axios.get(`http://localhost:4000/appointments?doctorId=${id}&facilityId=${facility}&role=${role}`);
    const data = await response.data;
    return data || {}
}

const getDoctorDetails = async (id, facility, role) => {
    const response = await axios.get(`http://locahost:4000/doctors?id=${id}&role=${role}&facilityId=${facility}`);
    const data = await response.data;
    return data || {};
}

const getPatientDetails = async (id) => {
    const response = await axios.get(`http://locahost:4000/patients?id=${id}`);
    const data = await response.data;
    return data || {};
}

export {
    getAppointments,
    getDoctorAppointments,
    getDoctorDetails,
    getPatientDetails,
    createDoctorNamespace
}

