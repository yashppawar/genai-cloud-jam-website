import React from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

export default function Alert({
    text,
    type,
    Icon,
}: {
    text: string;
    type?: string;
    Icon: LucideIcon;
}) {
    return (
        <div role="alert" className={clsx("alert alert-success rounded-none", {
            "alert-warning": type === 'warning',
            'alert-info': type === 'info',
            'alert-error': type === 'error'
        })}>
            <Icon/>
            <span>{text}</span>
        </div>
    );
}
