import { CookieState, CookieAction } from "./cookie";
import { createReducer } from "typesafe-actions";
import { GET_COOKIE } from "./actions";

// 초기값 설정
const initialState: CookieState = [
  {
    _id:"5e9172f2b95f5908585cf2dd",
    name:"용감한 쿠키",
    image:"http://vignette2.wikia.nocookie.net/cookierun/images/1/1b/Brave_Cookie...",
    class:"common"
  }
];

const cookies = createReducer<CookieState, CookieAction>(initialState, {
  // [GET_COOKIE]: (state, {payload: text}) => 
  [GET_COOKIE]: (state, { payload: text }) =>
    state.concat({
      _id:"5e9172f2b95f5908585cf2dd33",
      name:"용감한 쿠키",
      image:"http://vignette2.wikia.nocookie.net/cookierun/images/1/1b/Brave_Cookie...",
      class:"common"
    }),
});

export default cookies;