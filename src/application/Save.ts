import { SaveProcessAction } from "../redux/action/SaveProcessAction";
import { ActionType } from "../redux/action/ActionType";
import { Process } from "../model/Process";

export class Save {
    private static _instance: Save;

    public static instance(): Save {
        if (!Save._instance)
            Save._instance = new Save();

        return Save._instance;
    }

    save(dispatch: any, process: Process) {

        return function action(dispatch: any) {

            var resultAction: SaveProcessAction = new SaveProcessAction(ActionType.SAVING_PROCESS_TYPE, process);
            
            dispatch({ ...resultAction });

            //TODO build the axios request and send
        }
    }
}