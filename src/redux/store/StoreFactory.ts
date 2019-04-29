import { applyMiddleware, createStore, Store, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ProcessState } from '../state/ProcessState';
import { SaveProcessAction } from '../action/SaveProcessAction';
import { ActionType } from '../action/ActionType';
import { Process } from '../../model/Process';


export class StoreFactory {

    private static store: Store;

    static getStore(): Store {
        if (!StoreFactory.store)
            StoreFactory.store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
        return StoreFactory.store;
    }


}

//const emptyState: ProcessState = new ProcessState(new Process('', '', []));


const processReducer = (state: any = new ProcessState(new Process('', '', [])), action: SaveProcessAction) => {
    //console.log(action);
    var newState: ProcessState = new ProcessState(new Process('', '', []));
    switch (action.type) {

        case ActionType.LOADING_PROCESS_TYPE:
            newState.isFetching = true;
            //console.log(Object.assign(new ProcessState(new Process('', '', [])), state, newState));
            return Object.assign(new ProcessState(new Process('', '', [])), state, newState);


        case ActionType.LOADING_PROCESS_SUCCESS_TYPE:

            //SET UP NEW STATE after load success
            newState.isFetching = false;
            newState.process = action.process;
            //console.log(action);

            //console.log(Object.assign(new ProcessState(new Process('', '', [])), state, newState));
            return Object.assign(new ProcessState(new Process('', '', [])), state, newState);



        case ActionType.SAVING_PROCESS_TYPE:

            newState.isFetching = true;
            newState.process = action.process;
            //console.log(action);

            return Object.assign(new ProcessState(new Process('', '', [])), state, newState);


        case ActionType.SAVING_PROCESS_SUCCESS_TYPE:

            //SET UP NEW STATE after save success
            newState.isFetching = false;
            newState.process = action.process;

            return Object.assign(new ProcessState(new Process('', '', [])), state, newState);



        case ActionType.SAVING_PROCESS_FAILURE_TYPE:

            //TODO SET UP NEW STATE after save failure
            return state
        default: return state;



    }

}

const rootReducer = combineReducers({ processState: processReducer });