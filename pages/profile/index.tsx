import { Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Hoc from "../../hoc";
import OGWLHome from "../../layouts/ogwl-home";
import * as session from "../../helpers/session";

const Profile: NextPage = () => {
    return (
        <Hoc title="Profile" isAuth>
            <OGWLHome title="Profile">
                <Text
                    onClick={() => {
                        session.clear();
                        window.location.href = "/login";
                    }}
                >
                    Logout
                </Text>
            </OGWLHome>
        </Hoc>
    );
};

export default Profile;
