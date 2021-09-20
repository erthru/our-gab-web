import { decrypt, encrypt } from "./crypto";

type Session = {
    token: string | null;
    refreshToken: string | null;
    password: string | null;
};

export const create = (token: string, refreshToken: string, password: string) => {
    const obj: Session = {
        token: token,
        refreshToken: refreshToken,
        password: password,
    };

    localStorage.setItem("session", encrypt(JSON.stringify(obj)));
};

export const get = (): Session => {
    if (isSet()) return JSON.parse(decrypt(localStorage.getItem("session")!!));
    else
        return {
            token: null,
            refreshToken: null,
            password: null,
        };
};

export const isSet = (): boolean => {
    return localStorage.getItem("session") !== null;
};

export const clear = () => {
    localStorage.removeItem("session");
};
