import OGWLoginForm, { LoginFormValue } from "../../components/forms/ogw-login-form";
import Hoc from "../../hoc";
import * as authService from "../../services/auth-service";
import * as session from "../../helpers/session";
import OGWAlert from "../../components/commons/ogw-alert";
import { useState } from "react";
import OGWLGuest from "../../layouts/ogwl-guest";

const Login = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submit = async (data: LoginFormValue) => {
        setIsLoading(true);
        setIsLoginFailed(false);

        const res = await authService.login(data.username, data.password);

        if (!res.isError) {
            session.create(res.token, res.refreshToken, data.password);
            window.location.href = "/";
        } else setIsLoginFailed(true);

        setIsLoading(false);
    };

    return (
        <Hoc title="Login">
            <OGWLGuest title="Login">
                <OGWLoginForm onSubmited={submit} isLoading={isLoading} />
                {isLoginFailed && <OGWAlert title="Login failed" mt="16px" status="error" />}
            </OGWLGuest>
        </Hoc>
    );
};

export default Login;
