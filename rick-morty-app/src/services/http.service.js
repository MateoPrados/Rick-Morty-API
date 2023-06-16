import axios from "axios";


const HttpService = axios.create({
    headers : {
        "Content-type": "application/json"
    }
});

export default HttpService