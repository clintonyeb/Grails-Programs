import {Content} from "../models/content";
import {ActionReducer} from "@ngrx/store";
import * as content from "../actions/content_actions";


export const contentReducer: ActionReducer<Content[]> = (oldState: Content[] = [], action: content.Actions): Content[] => {
  switch (action.type){
    case content.ActionTypes.ADDED_NEW:
      return;
    case content.ActionTypes.CONTENT_ARRIVED:
      return;
    case content.ActionTypes.CONTENT_VIEWED:
      return;
    case content.ActionTypes.DELETED:
      return;
    case content.ActionTypes.DOWN_VOTED:
      return;
    case content.ActionTypes.UP_VOTED:
      return;
    case content.ActionTypes.SHARED:
      return;
    case content.ActionTypes.FLAGGED:
      return;
    default:
      return oldState;
  }
};
