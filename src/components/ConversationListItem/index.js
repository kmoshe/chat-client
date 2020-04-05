import React, {useEffect} from 'react';
import shave from 'shave';
import ToolbarButton from "../ToolbarButton";
import './ConversationListItem.css';
import person_add_outline from '../../assets/person-add-outline.svg';


export default function ConversationListItem(props) {
  const { handleClick } = props;

  useEffect(() => {
    shave('.conversation-snippet', 30);
  })

    const { connected, id, name, appointmentDateTime } = props.data;
    const icon = connected ? "user-minus" : "user-plus";
    return (
      <div className="conversation-list-item">

        <ToolbarButton key={`${id}_connected`}  icon={icon} handleClick={handleClick} />
          <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet"> שעת התור { appointmentDateTime }</p>
        </div>
      </div>
    );
}