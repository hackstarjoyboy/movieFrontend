import axios from 'axios';
export default axios.create({
    baseURL:'https://ichthyological-alfredo-lutose.ngrok-free.dev',//to overcome the restriction put by the cores
    headers:{"ngrok-skip-browser-warning":"true"}
});