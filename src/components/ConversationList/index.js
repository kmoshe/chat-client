import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import moment from 'moment';
import { getAppointments } from '../../services/api.service';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  },[])

 const getConversations = async () => {
    const appointments = await getAppointments();
     let newConversations =  appointments.map(appointment => {
         console.log(appointment.appointmentDateTime);
         return {
             connected: false,
             name:  `${appointment.firstName} ${appointment.lastName}`,
             appointmentDateTime: moment(appointment.appointmentDateTime).format('HH:MM')
         };
     });
     setConversations([...conversations, ...newConversations])
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="ניהול שיחות"
          leftItems={[
            <ToolbarButton key="cog" icon="cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="plus-circle" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}