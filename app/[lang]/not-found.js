import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

const NotFound = () => {
  return (
    <div>
      <h1 className={clsx("text-3xl", montserrat.className)}>Not Found</h1>
    </div>
  );
};

export default NotFound;
