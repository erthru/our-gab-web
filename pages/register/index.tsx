import Hoc from "../../hoc";
import OGWLGuest from "../../layouts/ogwl-guest";
import OGWRegisterForm, { RegisterFormValue } from "../../components/forms/ogw-register-form";
import { useState } from "react";
import OGWAlert from "../../components/commons/ogw-alert";
import * as peopleService from "../../services/people-service";
import * as session from "../../helpers/session";
import * as authService from "../../services/auth-service";

const Register = () => {
    const [isPasswordNotMatch, setIsPasswordNotMatch] = useState(false);
    const [isUsernameExist, setIsUsernameExist] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submit = async (data: RegisterFormValue) => {
        setIsLoading(true);
        setIsPasswordNotMatch(false);
        setIsUsernameExist(false);

        if (data.password !== data.passwordConfirmation) setIsPasswordNotMatch(true);
        else {
            const res = await peopleService.register(data.name, data.username, data.password);

            if (res.isError && res.description.includes("duplicate")) setIsUsernameExist(true);
            else {
                const res1 = await authService.login(data.username, data.password);
                session.create(res1.token, res1.refreshToken, data.password);
                window.location.href = "/";
            }
        }

        setIsLoading(false);
    };

    return (
        <Hoc title="Register">
            <OGWLGuest title="Register">
                <OGWRegisterForm onSubmited={submit} isLoading={isLoading} />
                {isPasswordNotMatch && <OGWAlert title="Password not match" mt="16px" status="error" />}
                {isUsernameExist && <OGWAlert title="Username already taken" mt="16px" status="error" />}
            </OGWLGuest>
        </Hoc>
    );
};

export default Register;
