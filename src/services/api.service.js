import axios from "axios";
import {isPatient} from "./utils.service";


const apiPort = isPatient() ? 4002 : 4001;

const createDoctorNamespace = async () => {
    const response = await axios.get(`http://localhost:3030/999999999`);
    const data = await response.data;
    return data || {}
}

const getMessages = async (appointmentId) => {
    const response = await axios.get(`http://localhost:3030/messages?appointmentId=${appointmentId}`) ;
    const data = await response.data;
    return data || {};
}

const getAppointments = async (id, facility, role) => {
    const response = await axios.get(`http://localhost:3030/appointments/`);
    const data = await response.data;
    return data || {}
}

const getDoctorAppointments = async (id, facility, role) => {
    const response = await axios.get(`http://localhost:3030/api/appointments?doctorId=${id}&facilityId=${facility}&role=${role}`);
    const data = await response.data;
    return data || {}
}

const getPatientAppointment = async (id) => {
    const response = await axios.get(`http://localhost:3030/api/appointments?patient.id=${id}`);
    const data = await response.data;
    return data || {}
}


const getDoctorDetails = async (id, facility, role) => {
    const response = await axios.get(`http://localhost:3030/api/doctors?id=${id}&role=${role}&facilityId=${facility}`);
    const data = await response.data;
    return data || {};
}

const getPatientDetails = async (id) => {
    console.log(`getPatientDetails ${id}`);
    const response = await axios.get(`http://localhost:3030/api/patients?id=${id}`);
    const data = await response.data;
    return data || {};
}

const connectToDoctor = async (appointmentId) => {
    const response = await axios.get(`http://localhost:3000/`);
}

export {
    getAppointments,
    getDoctorAppointments,
    getPatientAppointment,
    getDoctorDetails,
    getPatientDetails,
    createDoctorNamespace
}

