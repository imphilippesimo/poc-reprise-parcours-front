import { Step } from "./Step";

export class Process {
    private _processId: number;
    private _processInstanceId: number;
    private _steps: Step[];


    constructor(processId: number, processInstanceId: number, steps: Step[]) {
        this._processId = processId;
        this._processInstanceId = processInstanceId;
        this._steps = steps;
    }


    /**
     * Getter processId
     * @return {number}
     */
    public get processId(): number {
        return this._processId;
    }

    /**
     * Getter processInstanceId
     * @return {number}
     */
    public get processInstanceId(): number {
        return this._processInstanceId;
    }


    /**
     * Setter processId
     * @param {number} value
     */
    public set processId(value: number) {
        this._processId = value;
    }

    /**
     * Setter processInstanceId
     * @param {number} value
     */
    public set processInstanceId(value: number) {
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