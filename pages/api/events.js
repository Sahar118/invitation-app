import axios from "axios";

export const AddEvent = async (payload) => {
    try {
        const response = await axios.post("/api/events/add-event", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


export const GetAllEvent = async (payload) => {
    try {
        const response = await axios.get("/api/events/get-all-events", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const GetEventById = async (id) => {
    try {
        const response = await axios.get(`/api/events/get-event-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
