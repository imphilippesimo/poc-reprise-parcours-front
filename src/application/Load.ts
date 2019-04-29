import { Process } from "../model/Process";
import { LoadProcessAction } from "../redux/action/LoadProcessAction";
import { ActionType } from "../redux/action/ActionType";
import axios from 'axios';

export class Load {

    private static _instance: Load;

    public static instance(): Load {
        if (!Load._instance)
            Load._instance = new Load();
        return Load._instance;
    }


    load(dispatch: any, processInstanceId: string|null) {

        return function action(dispatch: any) {

            let resultAction: LoadProcessAction = new LoadProcessAction(ActionType.LOADING_PROCESS_TYPE, new Process("", "", []));
            dispatch({ ...resultAction });



            axios({
                method: 'get',
                url: 'http://localhost:8080/step',
                params: {
                    instance_id: processInstanceId
                }

            }).then(function (response) {
                //console.log(response);
                const process: Process = response.data;
                resultAction = new LoadProcessAction(ActionType.LOADING_PROCESS_SUCCESS_TYPE, process);
                dispatch({ ...resultAction });

            }).catch(function (error) {
                console.log(error);
                //resultAction = new LoadProcessAction(ActionType.LOADING_PROCESS_FAILURE_TYPE, process);
                //dispatch({ ...resultAction });

            });


        }
    }

}