import { CREATEINIT, SEARCH } from "../../store/action.type";
import axios from "axios";

const createInitAction = value => ({
  type: CREATEINIT,
  value
});
export const searchAction = value => ({
  type: SEARCH,
  value
});

export const getDataInit = dispatch =>
  axios.get("/api/create").then(res => {
    //跟store发送的dispatch
    dispatch(createInitAction(res.data.list));
  });
