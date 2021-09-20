import { Button } from "@chakra-ui/button";
import { FormEvent, useState } from "react";
import OGWInput from "../../commons/ogw-input";

type Props = {
    onSubmited: (data: LoginFormValue) => void;
    isLoading?: boolean;
};

export type LoginFormValue = {
    username: string;
    password: string;
};

const OGWLoginForm = (props: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmited({ username, password });
    };

    return (
        <form onSubmit={onSubmit}>
            <OGWInput
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isRequired
                isDisabled={props.isLoading}
            />

            <OGWInput
                label="Password"
                mt="16px"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
                isDisabled={props.isLoading}
            />

            <Button type="submit" w="full" colorScheme="green" mt="16px" isLoading={props.isLoading}>
                Submit
            </Button>
        </form>
    );
};

export default OGWLoginForm;
