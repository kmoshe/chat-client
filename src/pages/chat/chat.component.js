import React, {Component} from "react";
import Messenger from "../../components/Messenger";
import {getAppointments} from "../../services/api.service";
import moment from "moment";
import socket from "../../services/socket.service";

export default function ChatPage({ user }) {

    return (
        <div className="App">
            <Messenger user={user} />
        </div>
    );
}