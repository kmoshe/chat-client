import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import moment from 'moment';
import { getAppointments } from '../../services/api.service';

import './ConversationList.css';

export default function ConversationList(props) {
    console.log('ConversationList');
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  },[])

 const getConversations = async () => {

    const appointments = await getAppointments();
     let newConversations =  appointments.map(appointment => {
         console.log(appointment.appointmentDateTime);
         return {
             id: appointment.patient.id,
             connected: appointment.connected,
             name:  `${appointment.patient.firstName} ${appointment.patient.lastName}`,
             appointmentDateTime: moment(appointment.appointmentDateTime).format('HH:mm')
         };
     });
     setConversations([...conversations, ...newConversations])
  }
    const { user } = props;
    const messengerTypeTitle = user.userType == 'doctor' ? 'רופא' : 'חבר';
    const title = ` ניהול שיחות`;
    return (
      <div className="conversation-list">
        <Toolbar
          title={title}
          leftItems={[
            <ToolbarButton key="cog" icon="cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="plus-circle" />
          ]}
        />
        <ConversationSearch />
        { user.userType === 'doctor' && conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}