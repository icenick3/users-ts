import axios from "axios";
import {baseURL} from "./baseURL";
import {IResponse} from "../interfaces/IResponse";

export const userService = (gender:string|null, nat:string|null) => axios.get<IResponse>(baseURL, {
    params: {gender: gender, nat: nat}
})
