import * as fromUser from "../reducers/user_reducers";
import {environment} from "../../environments/environment";
import {combineReducers, ActionReducer} from "@ngrx/store";
import {storeFreeze} from "ngrx-store-freeze";
import {compose} from "@ngrx/core/compose";

export interface AppState{
  user: fromUser.State
}

const reducers = {
  user: fromUser.userReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
