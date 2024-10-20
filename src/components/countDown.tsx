'use client';
import React, { useState, useEffect } from "react";

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set your target date here
        const targetDate = new Date("2024-11-11T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        {/* Set the CSS variable --value dynamically for days */}
                        <span style={{ "--value": timeLeft.days }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        {/* Set the CSS variable --value dynamically for hours */}
                        <span style={{ "--value": timeLeft.hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        {/* Set the CSS variable --value dynamically for minutes */}
                        <span style={{ "--value": timeLeft.minutes }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        {/* Set the CSS variable --value dynamically for seconds */}
                        <span style={{ "--value": timeLeft.seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
}
