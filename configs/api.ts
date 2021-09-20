import { API_URL } from "../helpers/environments";
import * as session from "../helpers/session";

const refreshToken = async () => {
    if (!session.isSet()) session.clear();
    else {
        const _fetch = await fetch(`${API_URL}v1/auth/refresh`, {
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${session.get().refreshToken}`,
            },

            method: "POST",
        });

        const json = await _fetch.json();

        if (json.description === "invalid token / expired") {
            session.clear();
            window.location.href = "/login";
        } else {
            session.create(json.token, json.refreshToken, session.get().password!!);
        }
    }
};

export const get = async (url: string): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "GET",
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        get(url);
    } else return json;
};

export const post = async (url: string, body?: any): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "POST",

        body: JSON.stringify(body),
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        post(url, body);
    } else return json;
};

export const postMultipart = async (url: string, body?: any): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "POST",

        body: JSON.stringify(body),
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        postMultipart(url, body);
    } else return json;
};

export const put = async (url: string, body?: any): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "PUT",

        body: JSON.stringify(body),
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        put(url, body);
    } else return json;
};

export const putMultipart = async (url: string, body?: any): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "PUT",

        body: JSON.stringify(body),
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        putMultipart(url, body);
    } else return json;
};

export const remove = async (url: string): Promise<any> => {
    const _fetch = await fetch(url, {
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${session.get().token}`,
        },

        method: "DELETE",
    });

    const json = await _fetch.json();

    if (json.description === "invalid token / expired") {
        await refreshToken();
        remove(url);
    }
};
