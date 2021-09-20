import { Box } from "@chakra-ui/layout";
import { Channel } from "../../../models/channel";
import OGWChannel from "./ogw-channel";

type Props = {
    channels: Channel[];
};

const OGWChannels = (props: Props) => (
    <Box w="full">
        {props.channels.map((channel) => (
            <OGWChannel channel={channel} key={channel._id} />
        ))}
    </Box>
);

export default OGWChannels;
