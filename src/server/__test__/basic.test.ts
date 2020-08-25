import * as Path from "path";
import { WebServer } from "../server";

describe("Initial connection to /", () => {
    let backend: WebServer = null;

    beforeAll(async (done) => {
        const rootdir = Path.join(process.cwd(), "dist");
        backend = new WebServer(rootdir, 8080);
        backend.server.events.on("start", () => {
            done();
        });
        await backend.init();
        await backend.server.start();
    });

    afterAll(async (done) => {
        backend.server.events.on("stop", () => {
            done();
        });
        await backend.server.stop();
    });

    it("Should success with server connection", async () => {
        const options = {
            method: "GET",
            url: "/",
        };
        const data = await backend.server.inject(options);
        expect(data.statusCode).toBe(200);
    });
});
