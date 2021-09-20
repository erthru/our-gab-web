import { Button } from "@chakra-ui/button";
import { FormEvent, useState } from "react";
import OGWInput from "../../commons/ogw-input";

type Props = {
    onSubmited: (data: RegisterFormValue) => void;
    isLoading?: boolean;
};

export type RegisterFormValue = {
    name: string;
    username: string;
    password: string;
    passwordConfirmation: string;
};

const OGWRegisterForm = (props: Props) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmited({ name, username, password, passwordConfirmation });
    };

    return (
        <form onSubmit={onSubmit}>
            <OGWInput label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} isRequired isDisabled={props.isLoading} />

            <OGWInput
                label="Username"
                mt="16px"
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

            <OGWInput
                label="Password Confirmation"
                mt="16px"
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                isRequired
                isDisabled={props.isLoading}
            />

            <Button type="submit" w="full" colorScheme="green" mt="16px" isLoading={props.isLoading}>
                Submit
            </Button>
        </form>
    );
};

export default OGWRegisterForm;
