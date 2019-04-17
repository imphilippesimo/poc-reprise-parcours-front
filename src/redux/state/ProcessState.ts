import { Process } from "../../model/Process";

export class ProcessState {

    private _process: Process;
    private _isFetching: Boolean = false;


    constructor(process: Process) {
        this._process = process;
    }

    /**
     * Setter isFetching
     * @param {Boolean } value
     */
    public set isFetching(value: Boolean) {
        this._isFetching = value;
    }


}