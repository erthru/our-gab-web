import { Box, Container, Flex } from "@chakra-ui/layout";
import OGWMessageNav from "../../components/commons/ogw-message-nav";

type Props = {
    nameOfPartner: string;
    children: React.ReactNode;
};

const OGWLMessages = (props: Props) => (
    <>
        <Flex minH="100vh" w="full" bg="#cecece">
            <Container maxW="450px" minH="full" bg="#f7f7f7" mx="auto" paddingInlineStart="0" paddingInlineEnd="0">
                <Box position="fixed" maxW="inherit" w="full" top="0">
                    <OGWMessageNav title={props.nameOfPartner} />
                </Box>

                <Box p="16px" mt="40px">
                    {props.children}
                </Box>
            </Container>
        </Flex>
    </>
);

export default OGWLMessages;
