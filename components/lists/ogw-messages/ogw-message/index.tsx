import { Box, Flex, Text } from "@chakra-ui/layout";
import { Message } from "../../../../models/message";

type Props = {
    message: Message;
    myId: string;
};

const OGWMessage = (props: Props) => (
    <Box pb="16px">
        <Flex w="full" justifyContent={props.myId === props.message.peopleSenderId ? "right" : "left"}>
            <Box bg={props.myId === props.message.peopleSenderId ? "red.100" : "gray.100"} rounded="lg" px="16px" py="10px">
                <Text>{props.message.body}</Text>
            </Box>
        </Flex>
    </Box>
);

export default OGWMessage;
