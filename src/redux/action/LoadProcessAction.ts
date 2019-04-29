import { SaveProcessAction } from "./SaveProcessAction";
import { Process } from "../../model/Process";

export class LoadProcessAction extends SaveProcessAction {

    constructor(type: string, process: Process) {

        super(type, process);
    }

}