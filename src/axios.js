import axios from 'axios';

const instance=axios.create({
    baseURL:"https://studentcollege.herokuapp.com",
})

export default instance;

//""