import { ReactNode, useId, useState } from "react";
import { SvgIcon } from "../SvgIcon/Index";

import "./scss/index.scss";

interface DropDownInterface {
  children?: ReactNode;
  title?: string;
}

export const DropDown = ({ title = "status", children }: DropDownInterface) => {
  const [value, setValue] = useState(false);

  const id = useId();

  const toggleAction = () => {
    setValue(!value);
  };

  return (
    <div className="dropMenu">
      <input
        type="checkbox"
        id={`dropMenu_${id}`}
        className="d-none"
        onChange={() => {}}
        checked={value}
      />

      <label
        htmlFor={`dropMenu_${id}`}
        className="dropMenu-title d-flex align-items-center justify-content-between"
        onClick={toggleAction}
      >
        <span className="fs-sm fw-medium">{title}</span>
        <SvgIcon name="arrow-down" className="dropMenu-arrow" />
      </label>

      <div className="dropMenu-content scrollBar">{children}</div>
    </div>
  );
};
