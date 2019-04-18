import { AppAction } from "./AppAction";
import { Process } from "../../model/Process";

export class SaveProcessAction extends AppAction {

    process: Process;

    constructor(type: string, process: Process) {
        super(type);
        this.process = process;


    }




}