import { Box, Flex, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import { Channel } from "../../../../models/channel";
import OGWCard from "../../../commons/ogw-card";

type Props = {
    channel: Channel;
};

const OGWChannel = (props: Props) => (
    <Box w="full" pb="16px">
        <NextLink href={`/channels/${props.channel._id}/messages`}>
            <a>
                <OGWCard w="full" cursor="pointer">
                    <Flex w="full" alignItems="center">
                        <Box w="full">
                            <Text fontWeight="semibold" fontSize="18px">
                                {props.channel.nameOfPartner}
                            </Text>

                            <Text fontSize="14px" fontWeight={props.channel.isHaveUnread ? "medium" : "normal"} color="gray.600" mt="-2px">
                                {props.channel.messageLast.body}
                            </Text>
                        </Box>

                        {props.channel.isHaveUnread && <Box rounded="full" bg="red.400" h="10px" w="10px" />}
                    </Flex>
                </OGWCard>
            </a>
        </NextLink>
    </Box>
);

export default OGWChannel;
