import { Box, Flex } from "@chakra-ui/layout";
import { Message } from "../../../models/message";
import OGWMessage from "./ogw-message";

type Props = {
    messages: Message[];
    myId: string;
};

const OGWMessages = (props: Props) => (
    <Flex flexDir="column-reverse">
        {props.messages.map((message) => (
            <OGWMessage message={message} key={message._id} myId={props.myId} />
        ))}
    </Flex>
);

export default OGWMessages;
