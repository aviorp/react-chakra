
import { ArrayContextI } from "@/types";
import { useState } from "react";

/**
 @Contexts  Short hand for useContext(YourContext)
*/



/**
 @Hooks Short hand for common cases
 */
export const useArray = <T>(initialArray: T[]): ArrayContextI<T> => {
  const [array, setArray] = useState<T[]>(initialArray);

  const push = (element: T) => setArray(a => [...a, element]);
  const filter = (callback: (element: T) => boolean) =>
    setArray(a => a.filter(callback));
  const update = (index: number, newElement: T) =>
    setArray(a => {
      const newArray = [...a];
      newArray[index] = newElement;
      return newArray;
    });
  const remove = (index = 0) =>
    setArray(a => {
      const newArray = [...a];
      newArray.splice(index, 1);
      return newArray;
    });
  return { array, set: setArray, push, filter, update, remove };
};

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  return {
    value,
    toggle,
    setTrue,
    setFalse
  };
};
