import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import OGWCard from "../../components/commons/ogw-card";
import NextLink from "next/link";

type Props = {
    children: React.ReactNode;
    title: string;
};

const OGWLGuest = (props: Props) => {
    const router = useRouter();

    return (
        <>
            <Flex minH="100vh" w="full" bg="#cecece">
                <Container maxW="450px" minH="full" bg="#f7f7f7" mx="auto" paddingInlineStart="0" paddingInlineEnd="0">
                    <Box p="16px">
                        <Text mt="32px" color="red.400" fontSize="32px" fontWeight="bold">
                            {props.title}
                        </Text>

                        <OGWCard mt="16px">{props.children}</OGWCard>

                        <Flex w="full" mt="10px" justifyContent="center">
                            {router.pathname === "/login" ? (
                                <Text color="orange.500">
                                    Don't have account ?{" "}
                                    <NextLink href="/register">
                                        <a style={{ fontWeight: "bold" }}>Register</a>
                                    </NextLink>
                                </Text>
                            ) : (
                                <Text color="orange.500">
                                    Registered already ?{" "}
                                    <NextLink href="/login">
                                        <a style={{ fontWeight: "bold" }}>Login</a>
                                    </NextLink>
                                </Text>
                            )}
                        </Flex>
                    </Box>
                </Container>
            </Flex>
        </>
    );
};

export default OGWLGuest;
