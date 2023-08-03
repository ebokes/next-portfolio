import { useState } from "react";

export const useToggleLeftbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLeftbar = () => setIsOpen(!isOpen);

  return { isOpen, toggleLeftbar };
};
