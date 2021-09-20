import { Box, BoxProps } from "@chakra-ui/layout";

const OGWCard = (props: BoxProps) => (
    <Box {...props} bg="white" p="16px" rounded="lg" shadow="lg">
        {props.children}
    </Box>
);

export default OGWCard;
