export class Step {
    private _stepId: string;
    private _data: string;


    constructor(stepId: string, data: string) {
        this._stepId = stepId;
        this._data = data;
    }


    /**
     * Getter stepId
     * @return {string}
     */
	public get stepId(): string {
		return this._stepId;
	}

    /**
     * Getter data
     * @return {string}
     */
	public get data(): string {
		return this._data;
	}

    /**
     * Setter stepId
     * @param {string} value
     */
	public set stepId(value: string) {
		this._stepId = value;
	}

    /**
     * Setter data
     * @param {string} value
     */
	public set data(value: string) {
		this._data = value;
	}






}