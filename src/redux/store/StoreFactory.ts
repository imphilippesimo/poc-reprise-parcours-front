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

const emptyState: ProcessState = new ProcessState(new Process('', '', []));


const processReducer = (state: ProcessState = emptyState, action: SaveProcessAction) => {
    var newState: ProcessState = emptyState;
    switch (action.type) {

        case ActionType.SAVING_PROCESS_TYPE:

            newState.isFetching = true;
            newState.process = action.process;
            console.log(action);

            return Object.assign(
                emptyState,
                state,
                newState
            );
        case ActionType.SAVING_PROCESS_SUCCESS_TYPE:

            //TODO SET UP NEW STATE after save success

            return Object.assign(
                emptyState,
                state,
                newState
            );

        case ActionType.SAVING_PROCESS_FAILURE_TYPE:

            //TODO SET UP NEW STATE after save failure

            return Object.assign(
                emptyState,
                state,
                newState
            );



    }

    return newState;

}

const rootReducer = combineReducers({ processState: processReducer });