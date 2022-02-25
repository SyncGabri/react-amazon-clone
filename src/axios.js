import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/react-amzn-clone-40077/us-central1/api"      //local api url
});

export default instance;