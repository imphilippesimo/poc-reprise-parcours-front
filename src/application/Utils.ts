import { ProcessState } from "../redux/state/ProcessState";
import { Process } from "../model/Process";
import { Step } from "../model/Step";
import { HookURL } from "../model/HookURL";

export class Utils {

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
                return Utils.extractData(currentStep.data);
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


}