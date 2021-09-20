import { get, post, put } from "../configs/api";
import { API_URL } from "../helpers/environments";
import { Merge } from "../helpers/utility";
import { BasicResponse } from "../models/basic-response";
import { Channel } from "../models/channel";
import { Message } from "../models/message";
import { People } from "../models/people";

export const register = async (
    name: string,
    username: string,
    password: string
): Promise<Merge<BasicResponse, { people: People; username: string }>> => {
    return await post(`${API_URL}v1/people`, {
        name,
        username,
        password,
    });
};

export const myChannels = async (
    page: number,
    limit: number
): Promise<
    Merge<
        BasicResponse,
        {
            channels: Channel[];
            channelsTotal: number;
        }
    >
> => {
    return await get(`${API_URL}v1/people/me/channels?page=${page}&limit=${limit}`);
};

export const myMessages = async (
    channelId: string,
    page: number,
    limit: number
): Promise<
    Merge<
        BasicResponse,
        {
            messages: Message[];
            messagesTotal: number;
            peoplePartner: People;
        }
    >
> => {
    return await get(`${API_URL}v1/people/me/channel/${channelId}/messages?page=${page}&limit=${limit}`);
};

export const readMessages = async (
    channelId: string
): Promise<
    Merge<
        BasicResponse,
        {
            readedTotal: number;
        }
    >
> => {
    return await put(`${API_URL}v1/people/me/channel/${channelId}/message/read`);
};

export const sendMessage = async (
    body: string,
    peopleReceiverId: string
): Promise<
    Merge<
        BasicResponse,
        {
            message: Message;
        }
    >
> => {
    return await post(`${API_URL}v1/people/me/message`, {
        body,
        peopleReceiverId,
    });
};

export const me = async (): Promise<Merge<BasicResponse, { people: People; username: string }>> => {
    return await get(`${API_URL}v1/people/me`);
};
