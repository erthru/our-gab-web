import { Box, Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import OGWLoading from "../../components/commons/ogw-loading";
import OGWChannels from "../../components/lists/ogw-channels";
import Hoc from "../../hoc";
import OGWLHome from "../../layouts/ogwl-home";
import { Channel } from "../../models/channel";
import * as peopleService from "../../services/people-service";

const Channels: NextPage = () => {
    const [combinedChannels, setCombinedChannels] = useState<Channel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    let page = 1;

    useEffect(() => {
        getChannels();
    }, [page]);

    useEffect(() => {
        setIsDataEmpty(combinedChannels.length === 0);
    }, [combinedChannels]);

    const getChannels = async () => {
        setIsLoading(true);
        const res = await peopleService.myChannels(page, 10);

        if (page === 1) setCombinedChannels(res.channels);
        else {
            const arrTemp = combinedChannels;
            res.channels.map((channel) => arrTemp.push(channel));
            setCombinedChannels(arrTemp);
        }

        setIsLoading(false);
    };

    return (
        <Hoc title="Messages" isAuth>
            <OGWLHome title="Messages">
                <Flex w="full" flexWrap="wrap">
                    {isLoading && <OGWLoading />}

                    {combinedChannels.length > 0 && (
                        <Box w="full">
                            <OGWChannels channels={combinedChannels} />
                        </Box>
                    )}

                    {!isLoading && isDataEmpty && (
                        <Flex w="full">
                            <Text mx="auto">Data empty.</Text>
                        </Flex>
                    )}
                </Flex>
            </OGWLHome>
        </Hoc>
    );
};

export default Channels;
