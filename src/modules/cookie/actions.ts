import { createAction } from 'typesafe-actions';

// 액션 type
export const GET_COOKIE = 'cookie/GET_COOKIE';

// 액션 생성 함수
export const getCookie = createAction(GET_COOKIE)<object>();