import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState();
  const onToggleValue = () => {
    setValue(!value);
  };
  return {
    value,
    onToggleValue,
  };
}
