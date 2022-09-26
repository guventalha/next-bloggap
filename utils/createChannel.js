import axios from "axios";

export default function createChannel() {
    let controller;
    let lang;
    if (typeof window !== 'undefined') controller = new AbortController()
    if (typeof window !== 'undefined') lang = localStorage.getItem("currentLang")

    const request = axios.create({
        headers: {
            'Content-Type': 'application/json',
            //'Accept-Language': "tr-TR"
        },
        signal: controller?.signal,
        withCredentials: true
    });

    return { request, controller }
};