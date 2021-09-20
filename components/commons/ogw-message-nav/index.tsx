import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
    title: string;
};

const OGWMessageNav = (props: Props) => (
    <Flex bg="red.400" w="full" py="10px" px="16px" alignItems="center" color="white">
        <NextLink href="/channels">
            <a>
                <Icon fontSize="22px" as={IoIosArrowBack} cursor="pointer" />
            </a>
        </NextLink>

        <Text fontSize="18px" fontWeight="semibold" ml="16px">
            {props.title}
        </Text>
    </Flex>
);

export default OGWMessageNav;
