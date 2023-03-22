import { GETTOTALTASK, LOADING_TASK, SUCCESS_TASK } from "./task.type";

export const InitialState = {
  loading: false,
  task: [],
  error: false,
  totalTask: null,
};

export const TaskReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_TASK: {
      return {
        ...state,
        loading: false,
        task: payload,
      };
    }
    case GETTOTALTASK: {
      return {
        ...state,
        totalTask: payload?.length,
      };
    }
    case LOADING_TASK: {
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
