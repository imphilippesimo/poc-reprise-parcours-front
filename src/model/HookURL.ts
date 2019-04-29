export class HookURL {

    host: string;
    port: string;
    stepId: string;
    paramName: string = "instance_id";
    paramValue?: string = "";


    constructor(host: string, port: string, stepId: string, paramValue?: string) {
        this.host = host;
        this.port = port;
        this.stepId = stepId;
        this.paramValue = paramValue;
    }

}