import { _setUser } from "../../store/currentUser/index";
import store from "../../store";

export const setCurrentUser = (data) => store.dispatch(_setUser(data));
