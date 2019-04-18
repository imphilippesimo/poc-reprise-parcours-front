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


    /**
     * Getter process
     * @return {Process}
     */
	public get process(): Process {
		return this._process;
	}

    /**
     * Getter isFetching
     * @return {Boolean }
     */
	public get isFetching(): Boolean  {
		return this._isFetching;
	}

    /**
     * Setter process
     * @param {Process} value
     */
	public set process(value: Process) {
		this._process = value;
	}



}