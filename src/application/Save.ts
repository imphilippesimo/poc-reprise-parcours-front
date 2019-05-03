import { SaveProcessAction } from "../redux/action/SaveProcessAction";
import { ActionType } from "../redux/action/ActionType";
import { Process } from "../model/Process";
import axios from 'axios';
import { Utils } from "./Utils";

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

            axios({
                method: 'post',
                url: 'http://localhost:8080/step',
                data: process,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(function (response) {
                //console.log(response);
                let savedProcess: Process = new Process(response.data.process_id, response.data.steps, response.data.url);
                savedProcess.processInstanceId = response.data.process_instance_id;
                savedProcess.savedDate = response.data.saved_date;
                resultAction = new SaveProcessAction(ActionType.SAVING_PROCESS_SUCCESS_TYPE, savedProcess);
                /* console.log(savedProcess); */
                dispatch({ ...resultAction });
            }).catch(function (error) {
                console.log(error);
            });


        }
    }
}
