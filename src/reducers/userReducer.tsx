export type UserStateType = {
  name: string | undefined;
  level: "begginer" | "pro" | undefined;
  email: string | undefined;
  github: string | undefined;
};

export type UserActionType = {
  type: "ADD_NAME" | "CHOOSE_LEVEL" | "ADD_CONTACTS"
  payload: {
    name?: string;
    level?: "begginer" | "pro";
    email?: string;
    github?: string;
  };
};

export const userInitialState = {
  name: "",
  level: undefined,
  email: "",
  github: "",
};

export const userReducer = (state: UserStateType, action: UserActionType) => {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.payload.name };
    case "CHOOSE_LEVEL":
      return { ...state, level: action.payload.level };
    case "ADD_CONTACTS":
      return { ...state, email: action.payload.email, github: action.payload.github };
    default:
      return { ...state };
  }
};
