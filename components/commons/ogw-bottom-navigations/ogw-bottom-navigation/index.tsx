import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import NextLink from "next/link";

type Props = {
    title: string;
    icon: any;
    isActive?: boolean;
    onClick?: () => void;
    to: string;
};

const OGWBottomNavigation = (props: Props) => (
    <Box w="full">
        <NextLink href={props.to}>
            <a>
                <Flex
                    to={props.to}
                    flexWrap="wrap"
                    textColor={props.isActive ? "white" : "gray.300"}
                    alignItems="center"
                    w="full"
                    cursor="pointer"
                    onClick={props.onClick}
                >
                    <Icon mx="auto" as={props.icon} fontSize="26px" />

                    <Text w="full" textAlign="center" mt="1px" fontSize="10px" fontWeight="bold">
                        {props.title}
                    </Text>
                </Flex>
            </a>
        </NextLink>
    </Box>
);

export default OGWBottomNavigation;
