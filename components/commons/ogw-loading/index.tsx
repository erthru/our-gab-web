import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const OGWLoading = () => (
    <Flex w="full" mt="20px">
        <Spinner mx="auto" color="red.400" />
    </Flex>
);

export default OGWLoading;
