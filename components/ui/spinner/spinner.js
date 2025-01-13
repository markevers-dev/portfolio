import { Icon } from "components";
import clsx from "clsx";

export const Spinner = ({ size }) => {
  return (
    <Icon name="SpinnerGap" size={size} className={clsx("animate-spin")} />
  );
};
