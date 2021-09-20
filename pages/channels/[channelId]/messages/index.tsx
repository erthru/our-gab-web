import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import OGWLoading from "../../../../components/commons/ogw-loading";
import OGWSendMessageForm, { SendMessageFormValue } from "../../../../components/forms/ogw-send-message-form";
import OGWMessages from "../../../../components/lists/ogw-messages";
import Hoc from "../../../../hoc";
import OGWLMessages from "../../../../layouts/ogwl-messages";
import { Message } from "../../../../models/message";
import { People } from "../../../../models/people";
import * as peopleService from "../../../../services/people-service";

const MessagesByChannelId = () => {
    const [peoplePartner, setPeoplePartner] = useState<People | null>(null);
    const [people, setPeople] = useState<People | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    let page = 1;
    const { channelId } = router.query;
    const [combinedMessages, setCombinedMessages] = useState<Message[]>([]);
    const [isSending, setIsSending] = useState(false);
    const [formKey, setFormKey] = useState(new Date().getTime());

    useEffect(() => {
        if (channelId !== undefined) {
            getProfile();
            getMessages();
            readMessage();
        }
    }, [page, channelId]);

    const getProfile = async () => {
        const res = await peopleService.me();
        setPeople(res.people);
    };

    const getMessages = async () => {
        setIsLoading(true);
        const res = await peopleService.myMessages(channelId as string, page, 10);

        setPeoplePartner(res.peoplePartner);

        if (page === 1) {
            setCombinedMessages(res.messages);
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            const arrTemp = combinedMessages;
            res.messages.map((message) => arrTemp.push(message));
            setCombinedMessages(arrTemp);
        }

        setIsLoading(false);
    };

    const readMessage = async () => {
        await peopleService.readMessages(channelId as string);
    };

    const submit = async (data: SendMessageFormValue) => {
        setIsSending(true);
        await peopleService.sendMessage(data.body, peoplePartner?._id!!);
        page = 1;
        getMessages();
        setIsSending(false);
        setFormKey(new Date().getTime());
    };

    return (
        <Hoc title={`Message from ${peoplePartner?.name}`} isAuth>
            <OGWLMessages nameOfPartner={peoplePartner?.name ?? ""}>
                {isLoading && <OGWLoading />}

                {combinedMessages.length > 0 && (
                    <Box pb="40px">
                        <OGWMessages myId={people?._id!!} messages={combinedMessages} />
                    </Box>
                )}

                <Box position="fixed" ml="-16px" bottom="0" w="full" maxW="450px">
                    <OGWSendMessageForm isLoading={isSending} onSubmited={submit} key={formKey} />
                </Box>
            </OGWLMessages>
        </Hoc>
    );
};

export default MessagesByChannelId;
