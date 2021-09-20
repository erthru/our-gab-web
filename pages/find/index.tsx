import type { NextPage } from "next";
import Hoc from "../../hoc";
import OGWLHome from "../../layouts/ogwl-home";

const Find: NextPage = () => {
    return (
        <Hoc title="Find" isAuth>
            <OGWLHome title="Find">find people with their username will put here</OGWLHome>
        </Hoc>
    );
};

export default Find;
