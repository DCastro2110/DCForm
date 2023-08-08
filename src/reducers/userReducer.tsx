export type UserStateType = {
  name?: string;
  phone?: string;
  email?: string;
  job?: string;
  age?: string;
  haveParticipatedInTheEvent?: boolean;
};

export type UserActionType = {
  type: "ADD_PERSONAL" | "ADD_PCD_STATUS" | "ADD_CONTACTS";
  payload: UserStateType;
};

export const userInitialState = {
  name: undefined,
  age: undefined,
  email: undefined,
  phone: undefined,
  job: undefined,
  haveParticipatedInTheEvent: undefined,
};

export const userReducer = (state: UserStateType, action: UserActionType) => {
  switch (action.type) {
    case "ADD_PERSONAL":
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        job: action.payload.job,
      };
    case "ADD_PCD_STATUS":
      return {
        ...state,
        haveParticipatedInTheEvent: action.payload.haveParticipatedInTheEvent,
      };
    case "ADD_CONTACTS":
      return {
        ...state,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    default:
      return { ...state };
  }
};
