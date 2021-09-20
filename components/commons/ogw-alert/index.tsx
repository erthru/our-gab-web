import { Alert, AlertIcon, AlertProps, AlertTitle } from "@chakra-ui/alert";

interface Props extends AlertProps {
    title: string;
}

const OGWAlert = (props: Props) => (
    <Alert {...props} rounded="lg">
        <AlertIcon />
        <AlertTitle>{props.title}</AlertTitle>
    </Alert>
);

export default OGWAlert;
