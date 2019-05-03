import { Step } from "./Step";
import { HookURL } from "./HookURL";

export class Process {
    processId: string;
    processInstanceId?: string;
    savedDate: any;
    steps: Step[];
    url?: HookURL;

    constructor(processId: string, steps: Step[], url?: HookURL) {
        this.processId = processId;
        this.steps = steps;
        this.savedDate = new Date();
        this.url = url;
    }    

    

}