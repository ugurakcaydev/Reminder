import store from "../../store";
import { _setBackgroundColor, _setColor } from "../../store/appearance/index";

export const setBackgroundColor = (data) => store.dispatch(_setBackgroundColor(data));
export const setColor = (data) => store.dispatch(_setColor(data));
