import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import moment from 'moment';
import {
    getAppointments,
    getDoctorAppointments,
    getDoctorDetails,
    getPatientAppointment
} from '../../services/api.service';

import './ConversationList.css';
import {isDoctor} from "../../services/utils.service";

export default function ConversationList(props) {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getAppointments();
    }, [])

    const getAppointments = async () => {

        if (isDoctor()) {
            const appointments = await getDoctorAppointments(user.id, user.facilityId, user.role);
            let newConversations = appointments.map(appointment => {
                return {
                    id: appointment.patient.id,
                    connected: appointment.connected,
                    name: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
                    appointmentDateTime: moment(appointment.appointmentDateTime).format('HH:mm')
                };
            });
            setConversations([...conversations, ...newConversations]);
        } else {
            const appointment = await getPatientAppointment(user.id);
            const doctor = await getDoctorDetails(appointment.doctorId, appointment.facilityId, appointment.role);
            let newConversation = {
                id: appointment.patient.id,
                connected: appointment.connected,
                name: `${doctor.firstName} ${doctor.lastName}`,
                appointmentDateTime: moment(appointment.appointmentDateTime).format('HH:mm')
            };
            setConversations([...conversations, newConversation]);
        }
    }

    const {user} = props;
    const messengerTypeTitle = !isDoctor() ? 'רופא' : 'חבר';
    const title = ` ניהול שיחות`;
    return (
        <div className="conversation-list">
            <Toolbar
                title={title}
                leftItems={[
                    <ToolbarButton key="cog" icon="cog"/>
                ]}
                rightItems={[
                    <ToolbarButton key="add" icon="plus-circle"/>
                ]}
            />
            <ConversationSearch/>
            {user.userType === 'doctor' && conversations.map(conversation =>
                <ConversationListItem
                    key={conversation.name}
                    data={conversation}
                />
            )}
        </div>
    );
}