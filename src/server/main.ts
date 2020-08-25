import * as Path from "path";
import { WebServer } from "./server";

export const APP_PORT = 8080;

const main = async () => {
    let  rootpath = Path.resolve(process.cwd(), "..");
    rootpath = Path.normalize(rootpath);
    const backend = new WebServer(rootpath, APP_PORT);
    await backend.init();

    backend.start();
};

main();
