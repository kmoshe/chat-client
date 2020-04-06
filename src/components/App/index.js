import React, {useEffect, useState} from 'react';
import ChatPage from "../../pages/chat/chat.component";
import {isDoctor, isPatient} from "../../services/utils.service";
import {getDoctorDetails, getPatientDetails} from "../../services/api.service";



export default function App() {
    const [user, setUser] = useState({});

    useEffect(() => {

        if (isPatient()) {
            console.log('getPatientDetails');
            let patient = getPatientDetails('111111111');
            setUser(patient);
        }

        if (isDoctor()) {
            let doctor = getDoctorDetails('999999999', '11111', '1');
            setUser(doctor);
        }
    }, [user.id]);

    return (
        <div className="App">
            <ChatPage user={user} />
        </div>
    );
}