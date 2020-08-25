import * as Hapi from "@hapi/hapi";
import * as Path from "path";
import { Handlers } from "./handlers";

export class WebServer {
    public server: Hapi.Server;
    private contentpath: string;

    constructor(rootpath: string, port: number) {
        this.contentpath = Path.join(rootpath, "public");
        this.server = new Hapi.Server({
            port,
            routes: {
                files: {
                    relativeTo: this.contentpath,
                },
            },
        });
    }

    public init = async () => {
        await this.server.register(require("@hapi/inert"));
        this.server.route([
            { path: "/", method: "GET", handler: Handlers.serveRoot},
            { path: "/{files*}", method: "GET", handler: Handlers.serveAnyAsset},
        ]);
    }

    public start = async () => {
        console.log("Staring Server...");
        console.log("Server listening on", this.server.info.uri);
        console.log("Serving content from ", this.contentpath);
        await this.server.start();
    }

    public stop = async () => {
        await this.server.stop();
    }
}

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit();
});

