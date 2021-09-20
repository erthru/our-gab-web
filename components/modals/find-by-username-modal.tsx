import { Img } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { useState } from "react";
import { People } from "../../models/people";
import OGWInput from "../commons/ogw-input";
import OGWLoading from "../commons/ogw-loading";
import OGWSendMessageForm, { SendMessageFormValue } from "../forms/ogw-send-message-form";

type Props = {
    isShown: boolean;
    onClose: () => void;
    isLoading?: boolean;
    peopleResult?: People;
    onQuerying?: (username: string) => void;
    onMessageSent: (data: SendMessageFormValue) => void;
};

const FindByUsernameModal = (props: Props) => {
    let timer: any = null;

    const delayTyping = (value: string) => {
        clearTimeout(timer);

        if (value.length > 0) {
            timer = setTimeout(() => {
                props.onQuerying !== undefined && props.onQuerying(value);
            }, 500);
        }
    };

    return (
        <Modal isOpen={props.isShown} onClose={props.onClose}>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Find People</ModalHeader>
                <ModalCloseButton _focus={{ outline: "none" }} />

                <ModalBody pb="16px">
                    <OGWInput placeholder="Type username ..." onChange={(e) => delayTyping(e.target.value)} />

                    {props.isLoading && <OGWLoading />}

                    {!props.isLoading && props.peopleResult !== undefined && Object.keys(props.peopleResult).length > 0 && (
                        <Box w="full" mt="21px">
                            <Flex w="full">
                                <Img src={props.peopleResult.avatar} rounded="full" h="100px" w="100px" mx="auto" objectFit="cover" />
                            </Flex>

                            <Text w="full" textAlign="center" mt="10px" fontWeight="bold" pb="16px">
                                {props.peopleResult.name}
                            </Text>

                            <OGWSendMessageForm onSubmited={props.onMessageSent} />
                        </Box>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default FindByUsernameModal;
