import React, { useCallback, useState } from "react";

export const usePrev = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    e.preventDefault();
    setValue((prev)=>!prev);
    console.log(value)
  }, [value]);

  return [value, handler, setValue];
};
