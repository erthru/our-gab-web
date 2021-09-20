import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { useEffect } from "react";
import { TITLE } from "../helpers/environments";
import * as session from "../helpers/session";

type Props = {
    children: React.ReactNode;
    isAuth?: boolean;
    title?: string;
    isTitleHome?: boolean;
};

const Hoc = (props: Props) => {
    useEffect(() => {
        if (props.isAuth && !session.isSet()) window.location.href = "/login";
        else if (!props.isAuth && session.isSet()) window.location.href = "/";
    }, [props.isAuth]);

    return (
        <>
            <Head>
                <title>{props.isTitleHome ? `${TITLE}: Free Messaging App` : `${props.title} | ${TITLE}`}</title>
            </Head>

            <Box>{props.children}</Box>
        </>
    );
};

export default Hoc;
