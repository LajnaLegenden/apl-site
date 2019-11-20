import fs from "fs";
import util from "util";

class Logger {

    private isProdution: boolean;

    constructor() {
        if ("env" === process.env.ENVIROMENT) {
            this.isProdution = false;
        } else {
            this.isProdution = true;
        }
    }
    /**
     * Logs to console, or file in production
     * DEBUG LEVEL INFO
     * @param args array of object to log
     */
    public log(...args: any[]) {
        this.printLog("INFO", args);
    }

    /**
     * Logs to console, or file in production
     * DEBUG LEVEL DEBUG
     * @param args array of object to log
     */
    public debug(...args: any[]) {
        this.printLog("DEBUG", args);
    }

    /**
     * Logs to console, or file in production
     * DEBUG LEVEL WARNING
     * @param args array of object to log
     */
    public warn(...args: any[]) {
        this.printLog("WARNING", args);
    }

    /**
     * Logs to console, or file in production
     * DEBUG LEVEL ERROR
     * @param args array of object to log
     */
    public err(...args: any[]) {
        this.printLog("ERROR", args);
    }
    private printLog(level: string, args: any[]) {
        const d = new Date();
        const time = `[${this.addZeroBefore(d.getHours())}:${this.addZeroBefore(d.getMinutes())}:${this.addZeroBefore(d.getSeconds())}]`;
        if (this.isProdution) {
            // this.logToFile(args);
        } else {
            console.log(level, time, [args]);
        }
    }

    private addZeroBefore(n: any) {
        return (n < 10 ? "0" : "") + n;
    }

    private logToFile(level: string, time: string, args: string[]) {
        fs.appendFile("log.txt", `${level} ${time} ${args.toString}`, (err) => {
            if (err) { throw err; }
            console.log("Saved!");
        });
    }
}
export default new Logger();
