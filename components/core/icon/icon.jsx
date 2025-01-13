import { icons } from "./icon.helpers";
import clsx from "clsx";

export const Icon = ({
  className,
  name,
  size = 16,
  weight = "bold",
  color = "primary",
  ...iconProperties
}) => {
  if (!name || !icons[name]) throw new Error(`Icon ${name} does not exist`);

  const IconComponent = icons[name];

  return (
    <IconComponent.type
      {...IconComponent.props}
      {...iconProperties}
      size={size}
      weight={weight}
      className={clsx(className)}
    />
  );
};
