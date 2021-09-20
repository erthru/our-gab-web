import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import OGWBottomNavigations from "../../components/commons/ogw-bottom-navigations";
import { IoIosChatboxes, IoIosHome, IoIosPerson, IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import FindByUsernameModal from "../../components/modals/find-by-username-modal";
import { People } from "../../models/people";
import * as peopleService from "../../services/people-service";
import { SendMessageFormValue } from "../../components/forms/ogw-send-message-form";

type Props = {
    children: React.ReactNode;
    title?: string;
};

const OGWLHome = (props: Props) => {
    const [currentActivePosition, setCurrentActivePosition] = useState(0);
    const [isFindByUsernameModalShown, setIsFindByUsernameModalShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [people, setPeople] = useState<People | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        switch (router.pathname) {
            case "/":
                setCurrentActivePosition(0);
                break;

            case "/channels":
                setCurrentActivePosition(1);
                break;

            case "/profile":
                setCurrentActivePosition(3);
                break;
        }
    }, []);

    const setPosition = (position: number) => {
        setCurrentActivePosition(position !== 2 ? position : currentActivePosition);
        if (position === 2) setIsFindByUsernameModalShown(true);
    };

    const findByUsername = async (username: string) => {
        setIsLoading(true);
        const res = await peopleService.searchByUsername(username);
        const res1 = await peopleService.me();
        if (res.people !== undefined) setPeople(res.people._id !== res1.people._id ? res.people : undefined);
        setIsLoading(false);
    };

    const sendMessageToFoundedUsername = async (data: SendMessageFormValue) => {
        setIsLoading(true);
        await peopleService.sendMessage(data.body, people?._id!!);
        setIsLoading(false);
        window.location.href = "/channels";
    };

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
                                        to: "#",
                                    },
                                    {
                                        title: "Profile",
                                        icon: IoIosPerson,
                                        to: "/profile",
                                    },
                                ]}
                                onItemSelected={setPosition}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Flex>

            <FindByUsernameModal
                isShown={isFindByUsernameModalShown}
                onClose={() => setIsFindByUsernameModalShown(false)}
                isLoading={isLoading}
                peopleResult={people}
                onQuerying={findByUsername}
                onMessageSent={sendMessageToFoundedUsername}
            />
        </>
    );
};
export default OGWLHome;
