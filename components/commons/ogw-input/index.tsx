import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputProps } from "@chakra-ui/input";

interface Props extends InputProps {
    label?: string;
    mt?: string;
}

const OGWInput = (props: Props) => (
    <FormControl mt={props.mt}>
        {props.label !== undefined && <FormLabel fontSize="14px">{props.label}</FormLabel>}
        <Input {...props} size="sm" rounded="lg" _focus={{ borderWidth: "2px", borderColor: "red.400" }} mt="0px" />
    </FormControl>
);

export default OGWInput;
