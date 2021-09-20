import { Message } from "./message";

export type Channel = {
    _id: string;
    peopleIds: string[];
    createdAt: Date;
    updatedAt: Date;
    messageLast: Message;
    nameOfPartner: string;
    isHaveUnread: boolean;
};
