import { Step } from "./Step";

export class Process {
    private _processId: string;
    private _processInstanceId: string;
    private _steps: Step[];


    constructor(processId: string, processInstanceId: string, steps: Step[]) {
        this._processId = processId;
        this._processInstanceId = processInstanceId;
        this._steps = steps;
    }

    /**
     * Getter processId
     * @return {string}
     */
	public get processId(): string {
		return this._processId;
	}

    /**
     * Getter processInstanceId
     * @return {string}
     */
	public get processInstanceId(): string {
		return this._processInstanceId;
	}

    /**
     * Setter processId
     * @param {string} value
     */
	public set processId(value: string) {
		this._processId = value;
	}

    /**
     * Setter processInstanceId
     * @param {string} value
     */
	public set processInstanceId(value: string) {
		this._processInstanceId = value;
	}
   

   

    /**
     * Getter steps
     * @return {Step[]}
     */
    public get steps(): Step[] {
        return this._steps;
    }

    /**
     * Setter steps
     * @param {Step[]} value
     */
    public set steps(value: Step[]) {
        this._steps = value;
    }



}