
import * as Hapi from "@hapi/hapi";

export const Handlers = {

    serveRoot: (request: Hapi.Request, h: any) => {
        return h.file("index.html");
    },

    serveAnyAsset: (request: Hapi.Request, h: any) => {
        const asset = request.params.files;
        return h.file(asset).header("Cache-Control", "no-cache, no-store, must-revalidate");
    },
 };
