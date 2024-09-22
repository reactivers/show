import { FC, PropsWithChildren } from "react";
import { IShowProps } from "./types";

const Show: FC<PropsWithChildren<IShowProps>> = ({ children, ...props }) => {
  if (props.if) return <>{children}</>;
  return null;
};

export default Show;
