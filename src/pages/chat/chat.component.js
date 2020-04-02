import React, {Component} from "react";
import Messenger from "../../components/Messenger";
import {getAppointments} from "../../services/api.service";
import moment from "moment";
import socket from "../../services/socket.service";

export class ChatComponent extends React.Component {

    userType = process.env.REACT_APP_CLIENT_TYPE.trim();
    constructor() {
        super();
        console.log(this.userType);
        console.log(this.userType.toString().trim() === 'doctor');
        this.state = {
            messages: [],
            user: { userType: this.userType, id: '999999999', role: '1', facilityId: '11111'}
        };
    }

    getUser() {
        if (this.userType === 'doctor') {
            this.setState({
                user: {
                    userType: this.userType,
                    id: '999999999',
                    role: '1',
                    facilityId: '11111'
                }
            });
        } else {
            this.setState({
                user: {
                    userType: this.userType,
                    id: '111111111'
                }
            });
        }
    }

    addExternalMessage = (msg) => {
        const { messages } = this.state;
        const lastId = this.state.messages && messages.length > 0 ? Math.max.apply(Math, messages.map(message => message.id)) : 0;
        msg.id = lastId;
        this.setState({ messages: [...this.state.messages, msg] })
    };

    getMessages = () => {
        let tempMessages = [];

        if (this.userType === 'doctor') {
            tempMessages = [{
                id: 1,
                author: '000000000',
                message: 'אנא המתן להתחברות החבר',
                timestamp: new Date().getTime()
            },
                {
                    id: 1,
                    author: '000000000',
                    message: 'חבר מחובר',
                    timestamp: new Date().getTime()
                }
            ];
        } else {
            tempMessages = [{
                    id: 1,
                    author: '000000000',
                    message: 'אנא המתן להתחברות הרופא',
                    timestamp: new Date().getTime()
                },
                {
                    id: 1,
                    author: '000000000',
                    message: 'הרופא מחובר',
                    timestamp: new Date().getTime()
                }
            ];
        }
        this.setState({ messages: [...this.state.messages, ...tempMessages]});
    }

    componentDidMount() {
        this.getUser();
        this.getMessages();
        socket.on("chat message", (msg) => this.addExternalMessage(msg));
    }

    render() {
        const { user, messages } = this.state;
        return (
            <div className="App">
                <Messenger user={user} messages={messages} />
            </div>
        );
    }
}

export default ChatComponent;