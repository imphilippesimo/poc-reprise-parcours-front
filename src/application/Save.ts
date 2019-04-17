import { SaveProcessAction } from "../redux/action/SaveProcessAction";
import { ActionType } from "../redux/action/ActionType";

export class Save {
    private static _instance: Save;

    public static instance(): Save {
        if (!Save._instance)
            Save._instance = new Save();

        return Save._instance;
    }

    save(dispatch:any){
        return function action(dispatch: any){

            var resultAction: SaveProcessAction = new SaveProcessAction(ActionType.SAVING_PROCESS_TYPE);
            dispatch({...resultAction});

            //TODO build the axios request and send
        }
    }
}