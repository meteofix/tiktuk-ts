const SET_PLAYING_ID:string = 'SET_PLAYING_ID';
const SET_MUTED:string = 'SET_MUTED';

type PlayingIdType = number
type MutedType = boolean

type Action = {
  type: string,
  payload: PlayingIdType | MutedType
}
export type PlayerState = {
  id: PlayingIdType,
  muted: MutedType
}


export function playerReducer(state, action:Action):PlayerState {
  switch (action.type) {
    case SET_PLAYING_ID:
      return { ...state, id: action.payload };
    case SET_MUTED:
      return { ...state, muted: action.payload };
    default:
      return state;
  }
}

export const setPlayingId = (payload:PlayingIdType) => ({ type: SET_PLAYING_ID, payload });
export const setMuted = (payload:MutedType) => ({ type: SET_MUTED, payload });
