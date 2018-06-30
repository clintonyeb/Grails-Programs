import {type} from "../utilities/action_type";
import {Action} from "@ngrx/store";
import {Content} from "../models/content";

export const ActionTypes = {
  UP_VOTED:           type('[Content] up voted'),
  DOWN_VOTED:           type('[Content] dow voted'),
  FLAGGED:          type('[Content] flagged innapropriate'),
  CONTENT_VIEWED:          type('[Content] viewed'),
  CONTENT_ARRIVED:     type('[Content] new arrived'),
  ADDED_NEW:   type('[Content] user added new'),
  SHARED:   type('[Content] shared'),
  DELETED:   type('[Content] is deleted'),
};

export class upVotedAction implements Action {
  type = ActionTypes.UP_VOTED;

  constructor(public payload: Content) { }
}
export class downVotedAction implements Action {
  type = ActionTypes.DOWN_VOTED;

  constructor(public payload: Content) { }
}
export class flaggedAction implements Action {
  type = ActionTypes.FLAGGED;

  constructor(public payload: Content) { }
}
export class viewedAction implements Action {
  type = ActionTypes.CONTENT_VIEWED;

  constructor(public payload: Content) { }
}
export class arrivedAction implements Action {
  type = ActionTypes.CONTENT_ARRIVED;

  constructor(public payload: Content) { }
}
export class addedNewAction implements Action {
  type = ActionTypes.ADDED_NEW;

  constructor() { }
}
export class sharedAction implements Action {
  type = ActionTypes.SHARED;

  constructor() { }
}
export class deletedAction implements Action {
  type = ActionTypes.DELETED;

  constructor() { }
}

export type Actions
 = upVotedAction | downVotedAction | flaggedAction | viewedAction | arrivedAction | addedNewAction | sharedAction
| deletedAction
