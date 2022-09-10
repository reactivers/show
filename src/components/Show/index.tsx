import { FC, PropsWithChildren } from "react";
import { IShowProps } from "./types";

const Show: FC<PropsWithChildren<IShowProps>> = ({ showIf, children }) => {
    if (showIf) return <>{children}</>
    return null;
}

export default Show;