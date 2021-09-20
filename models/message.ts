import { Channel } from "./channel";
import { People } from "./people";

export type Message = {
    _id: string;
    body: string;
    isRead: boolean;
    peopleSenderId: string;
    channelId: string;
    createdAt: Date;
    updatedAt: Date;
    people: People;
    channel: Channel;
};
