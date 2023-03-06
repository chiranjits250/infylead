import axios from 'axios';
import Config from '../config';
import applyInterceptors from './apply-interceptors';

const baseURL = Config.IS_PRODUCTION ? '/backend' : 'http://localhost:8000/backend'

const FrontendAxios = axios.create({
  baseURL: baseURL,
});

applyInterceptors(FrontendAxios);
export default FrontendAxios;