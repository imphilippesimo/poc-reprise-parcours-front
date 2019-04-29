import { Process } from "../../model/Process";

export class ProcessState {

    process: Process;
    isFetching: Boolean = true;


    constructor(process: Process) {
        this.process = process;
    }

   


}