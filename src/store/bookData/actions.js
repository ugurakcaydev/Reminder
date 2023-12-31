import { _setBookData } from "../../store/bookData/index";
import store from "../../store";

export const setBookData = (data) => store.dispatch(_setBookData(data));