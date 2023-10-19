import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";


export default class UserService {
    static  async getUseres(): Promise<AxiosResponse<IUser[]>> {
        return  axios.get<IUser[]>('./users.json')
    }
}