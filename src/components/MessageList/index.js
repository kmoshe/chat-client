import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import socket from '../../services/socket.service';
import './MessageList.css';
import logo_mac from '../../assets/logo_mac.png';


export default function MessageList(props) {
    const { user, messages} = props;
    const MY_USER_ID = user.id;
    const [message, setMessage] = useState('');

    const addMessage = () => {
        const msg = { id: 999, author: MY_USER_ID, message: message, timestamp: new Date().getTime() };
        socket.emit('chat message', msg);
    };



    const handleChange = (messageText) => setMessage(messageText);



  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    // if( tempMessages &&  tempMessages.length > 0  ) {
    //     tempMessages[i-1].scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //     });
    // }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title={ user.userType === 'doctor' ? "צ'אט עם חבר" : "צ'אט עם רופא" }
          leftItems={[

              <ToolbarButton key="video" icon="video" />,
              <ToolbarButton key="phone" icon="phone" />,
              <ToolbarButton key="info" icon="info-circle" />
          ]}
          rightItems={[
              <img key="maccabi_logo" src={logo_mac} />


          ]}
        />

        <div className="message-list-container">{renderMessages()}</div>

        <Compose
            handleChange={handleChange}
            leftItems={[
            <ToolbarButton key="plane" icon="paper-plane" handleClick={addMessage} />,
        ]} rightItems={[
          <ToolbarButton key="photo" icon="camera" />,
          <ToolbarButton key="image" icon="image" />,
          <ToolbarButton key="audio" icon="microphone" />,
          <ToolbarButton key="money" icon="credit-card" />,
          <ToolbarButton key="games" icon="gamepad" />,
          <ToolbarButton key="emoji" icon="smile" />
        ]}/>
      </div>
    );
}