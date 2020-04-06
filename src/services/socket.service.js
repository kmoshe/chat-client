import io from 'socket.io-client';
import { createDoctorNamespace } from './api.service';
import {getClientType, isDoctor, isPatient} from "./utils.service";
let socket = {};

if (isDoctor()) {

    socket = io.connect('http://localhost:3030', { query: { clientType: getClientType(), doctorId: '999999999' }, upgrade: false, forceJsonp: true});
}
else if (isPatient()) {
    socket = io.connect('http://localhost:3030', { query: { clientType: getClientType(), patientId: '111111111', appointmentId: '54325F51-9DCC-4425-B978-8816D3825D5B'}, upgrade: false, forceJsonp: true});
}


export default socket;