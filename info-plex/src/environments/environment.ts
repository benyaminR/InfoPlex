declare global {
    interface Window {
        env: {
            BACKEND_ENDPOINT: string;
        };
    }
}

export const environment = {
    production: false,
    backend_endpoint: window["env"]["BACKEND_ENDPOINT"] || "default"
};