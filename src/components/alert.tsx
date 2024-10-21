import React from "react";
import clsx from "clsx";
import { Presentation } from "lucide-react";
import Link from "next/link";

// {
//         text: "GenAI Cloud Study Jams live Session Today (21st October) @ 7 PM | join : https://meet.google.com/bsp-joqs-xvu",
//         icon: Presentation,
//         type: "warning",
//     },

export default function Alerts() {
    return <div className={`text-secondary`}>
        <div
            role="alert"
            className={clsx("alert alert-warning rounded-none")}
        >
            <Presentation />
            <span>GenAI Cloud Study Jams live Session Today (21st Oct) @ 7 PM | join : <Link href="https://meet.google.com/bsp-joqs-xvu" className="underline">https://meet.google.com/bsp-joqs-xvu</Link> </span>
        </div>
    </div>;
}

// export function Alert({
//     text,
//     type,
//     Icon,
// }: {
//     text: string;
//     type?: string;
//     Icon: LucideIcon;
// }) {
//     return (
//         <div
//             role="alert"
//             className={clsx("alert alert-info rounded-none", {
//                 "alert-warning": type === "warning",
//                 "alert-success": type === "success",
//                 "alert-error": type === "error",
//             })}
//         >
//             <Icon />
//             <span>{text}</span>
//         </div>
//     );
// }
