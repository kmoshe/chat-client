import io from 'socket.io-client';
import { createDoctorNamespace } from './api.service';
const result = createDoctorNamespace();
let socket = {};
if (process.env.REACT_APP_CLIENT_TYPE.trim() === 'doctor') {
    const result = createDoctorNamespace();
}
socket = io.connect('http://localhost:3030/999999999', {upgrade: false, forceJsonp: true});

export default socket;