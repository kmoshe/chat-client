import React, {useEffect} from 'react';
import shave from 'shave';
import ToolbarButton from "../ToolbarButton";
import './ConversationListItem.css';
import person_add_outline from '../../assets/person-add-outline.svg';


export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 30);
  })

    const { connected, name, appointmentDateTime } = props.data;

    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={person_add_outline} alt="not connected" />
          <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet"> שעת התור { appointmentDateTime }</p>
        </div>
      </div>
    );
}