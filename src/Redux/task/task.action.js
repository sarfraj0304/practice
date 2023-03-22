import {
  GetTaskAPI,
  GetTotalTaskAPI,
  PatchTaskAPI,
  deleteTaskAPI,
} from "./task.api";
import {
  ERROR_TASK,
  GETTOTALTASK,
  LOADING_TASK,
  SUCCESS_TASK,
} from "./task.type";

export const GetTask = (page) => async (dispatch) => {
  dispatch({ type: LOADING_TASK });
  try {
    const data = await GetTaskAPI(page);
    dispatch({ type: SUCCESS_TASK, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_TASK });
  }
};

export const PatchTask = (data) => async (dispatch) => {
  dispatch({ type: LOADING_TASK });
  try {
    const output = await PatchTaskAPI(data);
    dispatch(GetTask());
  } catch (error) {
    dispatch({ type: ERROR_TASK });
  }
};

export const DeleteTask = (id) => async (dispatch) => {
  dispatch({ type: LOADING_TASK });
  try {
    const output = await deleteTaskAPI(id);
    dispatch(GetTask());
  } catch (error) {
    dispatch({ type: ERROR_TASK });
  }
};

export const GetTotalTask = () => async (dispatch) => {
  dispatch({ type: LOADING_TASK });
  try {
    const data = await GetTotalTaskAPI();
    dispatch({ type: GETTOTALTASK, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_TASK });
  }
};
