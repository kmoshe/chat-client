import axios from "axios";

const getAppointments = async (id, facility, role) => {
    const response = await axios.get('http://localhost:4000/appointments');
    const data = await response.data;
    return data || {}
}

export {
    getAppointments
}

