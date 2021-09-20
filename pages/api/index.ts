import { NextApiRequest, NextApiResponse } from "next";

const index = (req: NextApiRequest, res: NextApiResponse) => {
    res.json({
        message: "hello",
    });
};

export default index;
