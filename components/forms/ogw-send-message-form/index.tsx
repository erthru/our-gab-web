import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { FormEvent, useState } from "react";
import OGWInput from "../../commons/ogw-input";

type Props = {
    onSubmited: (data: SendMessageFormValue) => void;
    isLoading?: boolean;
};

export type SendMessageFormValue = {
    body: string;
};

const OGWSendMessageForm = (props: Props) => {
    const [body, setBody] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmited({ body });
    };

    return (
        <form onSubmit={onSubmit}>
            <Flex w="full" bg="white" py="10px" px="16px" alignItems="center">
                <OGWInput type="text" placeholder="Type something here ..." value={body} onChange={(e) => setBody(e.target.value)} isDisabled={props.isLoading} isRequired />

                <Button
                    variant="link"
                    type="submit"
                    rounded="full"
                    _hover={{ textDecor: "none" }}
                    _focus={{ textDecor: "none" }}
                    color="red.400"
                    fontWeight="bold"
                    bg="transparent"
                    ml="12px"
                    isLoading={props.isLoading}
                >
                    Send
                </Button>
            </Flex>
        </form>
    );
};

export default OGWSendMessageForm;
