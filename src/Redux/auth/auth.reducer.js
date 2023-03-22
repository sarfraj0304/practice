import React from "react";
import {
  LOADING_AUTH,
  LOGOUT_AUTH,
  RESET_AUTH,
  SUCCESS_AUTH,
} from "./auth.type";

export const InitialState = {
  loading: false,
  user: {
    token: "",
    isAuth: false,
  },
  error: false,
  success: false,
};

export const AuthReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_AUTH: {
      return {
        ...state,
        loading: false,
        user: { token: payload.token, isAuth: true },
        success: true,
      };
    }
    case LOGOUT_AUTH: {
      return {
        ...state,
        user: {
          token: "",
          isAuth: false,
        },
      };
    }
    case RESET_AUTH: {
      return {
        ...state,
        loading: false,
        success: false,
        error: false,
      };
    }
    case LOADING_AUTH: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
