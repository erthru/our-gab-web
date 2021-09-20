import type { NextPage } from "next";
import Hoc from "../hoc";
import OGWLHome from "../layouts/ogwl-home";

const Index: NextPage = () => {
    return (
        <Hoc isTitleHome isAuth>
            <OGWLHome title="Home">idk what to put here :3</OGWLHome>
        </Hoc>
    );
};

export default Index;
