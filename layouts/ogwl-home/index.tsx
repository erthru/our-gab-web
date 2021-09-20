import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import OGWBottomNavigations from "../../components/commons/ogw-bottom-navigations";
import { IoIosChatboxes, IoIosHome, IoIosPerson, IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

type Props = {
    children: React.ReactNode;
    title?: string;
};

const OGWLHome = (props: Props) => {
    const [currentActivePosition, setCurrentActivePosition] = useState(0);
    const router = useRouter();

    useEffect(() => {
        switch (router.pathname) {
            case "/":
                setCurrentActivePosition(0);
                break;

            case "/channels":
                setCurrentActivePosition(1);
                break;

            case "/find":
                setCurrentActivePosition(2);
                break;

            case "/profile":
                setCurrentActivePosition(3);
                break;
        }
    }, []);

    return (
        <>
            <Flex minH="100vh" w="full" bg="#cecece">
                <Container maxW="450px" minH="full" bg="#f7f7f7" mx="auto" paddingInlineStart="0" paddingInlineEnd="0">
                    <Flex flexDir="column" h="full" pb="50px">
                        <Box p="16px" h="full">
                            {props.title !== undefined && (
                                <Text mt="32px" color="red.400" fontSize="32px" fontWeight="bold">
                                    {props.title}
                                </Text>
                            )}

                            <Flex flex="1" mt="18px">
                                {props.children}
                            </Flex>
                        </Box>

                        <Box position="fixed" w="full" bottom="0" maxW="450px">
                            <OGWBottomNavigations
                                currentActivePosition={currentActivePosition}
                                items={[
                                    {
                                        title: "Home",
                                        icon: IoIosHome,
                                        to: "/",
                                    },
                                    {
                                        title: "Messages",
                                        icon: IoIosChatboxes,
                                        to: "/channels",
                                    },
                                    {
                                        title: "Find",
                                        icon: IoIosSearch,
                                        to: "/find",
                                    },
                                    {
                                        title: "Profile",
                                        icon: IoIosPerson,
                                        to: "/profile",
                                    },
                                ]}
                                onItemSelected={(position) => setCurrentActivePosition(position)}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </>
    );
};
export default OGWLHome;
