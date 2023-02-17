import { MouseEventHandler } from "react";

export interface ButtonProps {
    display: string;
    url: string;
    className?: string;
    onClick?: MouseEventHandler
}