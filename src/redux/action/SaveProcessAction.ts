import { AppAction } from "./AppAction";

export class SaveProcessAction extends AppAction{

    constructor(type: string) {
        super(type);
    
        
    }
    


    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this.type;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this.type = value;
	}

    

	

}