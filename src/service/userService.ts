import axios from 'axios';
import baseURL from './baseURL';
import { IResponse } from '../interfaces/IResponse';

const userService = (gender:string|null, nat:string|null) => axios.get<IResponse>(baseURL, {
  params: { gender, nat },
});

export default userService;
