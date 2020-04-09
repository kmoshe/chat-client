import React from 'react';
import io from 'socket-io.client';
import { conncet } from 'react-redux';

export const SocketContext = React.createContext({
    doctor: {},
    patient: {},
    appointmentId: '',
    appointmentDateTime: '',
    messages: []
});

export const useSocket = () => React.useContext(SocketContext);

export class WrappedSocketManager extends React.Component {

    state = {
        doctor: {},
        patient: {},
        appointmentId: '',
        appointmentDateTime: '',
        messages: []
    }
}