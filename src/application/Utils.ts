import { HookURL } from "../model/HookURL";
import { Process } from "../model/Process";
import { Step } from "../model/Step";
import { ProcessState } from "../redux/state/ProcessState";

type History = import("history").History<any>;

export class Utils {

    static PROCESS_ID = "SELLING";

    static mapStateToStepProps = (state: any, stepId: string) => {

        const processState: ProcessState = state.processState;
        //console.log(processState);
        const process: Process = processState.process;
        //console.log(process);
        if (process.steps) {

            const currentStep: Step = process.steps.filter(s => s.stepId === stepId)[0];
            console.log(currentStep);
            if (currentStep) {
                console.log(currentStep);
                return { ...Utils.extractData(currentStep.data), process: process };
            }

            else
                return {};

        } else
            return {};
    }

    static extractData = (data: string) => {

        //console.log(data);
        return JSON.parse(data);

    }

    static flatenUrl = (url: HookURL): string => {
        return url.host + ":" + url.port + "/" + url.stepId + "?" + url.paramName + "=" + url.paramValue;

    }

    static updateProcessWithStep = (step: Step, process: Process): Process => {

        let updating: boolean = false;

        //in case of empty process, initialize a new one and return
        if (!process.processId) {
            const process_instance_id = Utils.PROCESS_ID + Math.floor(Math.random() * 200000).toString();
            let hookURL: HookURL = new HookURL("http://localhost", "3000", step.stepId, process_instance_id);
            return new Process(Utils.PROCESS_ID, process_instance_id, [step], hookURL);
        }

        //if this step already exist in the process, its just a step update
        process.steps = process.steps.map(s => {

            if (s.stepId === step.stepId) {
                updating = true;
                s = step;
            }
            return s;
        })

      
        //not a step update, add it to the process
        if (!updating) {
            process.steps.push(step);
        }

        //update the hookUrl
        if (process.url)
            process.url.stepId = step.stepId;
        return process;
    }

    static saveData = (data: any, stepId: string, saveFunction: Function, process: Process) => {

        const dataAsJSON = JSON.stringify(data);
        const step: Step = new Step(stepId, dataAsJSON);
        process = Utils.updateProcessWithStep(step, process);
        saveFunction(process);


    }
}


