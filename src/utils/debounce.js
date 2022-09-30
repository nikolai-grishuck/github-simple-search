import { DEBOUNCE_DEFAULT } from "@/utils/constants";

let timer;
export const debounce = (cb, timeout = DEBOUNCE_DEFAULT) => {
  if (timer){
    clearTimeout(timer);
  }
  timer = setTimeout(cb, timeout);
};
