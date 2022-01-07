import axios from 'axios'
import {BASE_URL} from '../constants/Constants'


const instance = axios.create({
    BASE_URL: BASE_URL,
    
    
  });
  console.log('lll',BASE_URL);
  export default instance;