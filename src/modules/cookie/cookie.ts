import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CookieAction = ActionType<typeof actions>;

export type Cookie = {
  _id: string;
  name: string;
  image: string;
  class: string;
};

export type CookieState = Cookie[];