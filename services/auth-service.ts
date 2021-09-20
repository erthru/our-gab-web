import { post } from "../configs/api";
import { API_URL } from "../helpers/environments";
import { Merge } from "../helpers/utility";
import { BasicResponse } from "../models/basic-response";

export const login = async (
    username: string,
    password: string
): Promise<Merge<BasicResponse, { username: string; token: string; refreshToken: string }>> => {
    return await post(`${API_URL}v1/auth/login`, {
        username,
        password,
    });
};
