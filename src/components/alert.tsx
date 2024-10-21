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
        <div role="alert" className={clsx("alert alert-info rounded-none", {
            "alert-warning": type === 'warning',
            'alert-success': type === 'success',
            'alert-error': type === 'error'
        })}>
            <Icon/>
            <span>{text}</span>
        </div>
    );
}
