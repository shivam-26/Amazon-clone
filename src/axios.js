import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-228b7/us-central1/api' // THE API { cloud function } Url
}

);

export default instance;