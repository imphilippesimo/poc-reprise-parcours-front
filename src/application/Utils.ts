import { HookURL } from "../model/HookURL";
import { Process } from "../model/Process";
import { Step } from "../model/Step";
import { ProcessState } from "../redux/state/ProcessState";

export class Utils {

    static PROCESS_ID = "SELLING";

    static mapStateToStepProps = (state: any, stepId: string) => {

        const processState: ProcessState = state.processState;
        //console.log(processState);
        const process: Process = processState.process;
        //console.log(process);
        if (process.steps) {

            const currentStep: Step = process.steps.filter(s => s.stepId === stepId)[0];

            if (currentStep) {
                //console.log(Utils.extractData(currentStep.data));
                const result = {
                    ...Utils.extractData(currentStep.data),
                    instanceId: process.processInstanceId

                }
                console.log(result);
                return result;
            }

            else
                return {
                    instanceId: process.processInstanceId
                };

        }
        return {};
    }

    static extractData = (data: string) => {

        //console.log(data);
        return JSON.parse(data);

    }



    static updateProcessWithStep = (step: Step, process: Process): Process => {

        let updating: boolean = false;

        //in case of empty process, initialize a new one and return
        let hookURL: HookURL = new HookURL("http://localhost", "3000", step.stepId);
        if (!process.processInstanceId) {

            return new Process(Utils.PROCESS_ID, [step], hookURL);
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
            process.url = hookURL;
        return process;
    }

    static saveData = async (data: any, stepId: string, saveFunction: Function, process: Process) => {

        const dataAsJSON = JSON.stringify(data);
        const step: Step = new Step(stepId, dataAsJSON);
        process = Utils.updateProcessWithStep(step, process);
        await saveFunction(process);


    }
}


