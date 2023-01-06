import Sprites from "../../sprites.svg";

import "./scss/index.scss";

interface SvgIconInterface {
  name: string;
  className?: string;
}

export const SvgIcon = ({ name, ...rest }: SvgIconInterface) => {
  return (
    <span {...rest}>
      <svg className={`icon icon-${name}`} fill="currentColor">
        <use href={`${Sprites}#icon-${name}`} />
      </svg>
    </span>
  );
};
