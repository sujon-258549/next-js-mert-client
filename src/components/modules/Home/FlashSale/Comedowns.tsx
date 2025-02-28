"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

type CountdownRendererProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const Comedown = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  console.log(startTime);
  // Set the target time for countdown
  useEffect(() => {
    const time = {
      days: 2,
      hours: 2,
      minutes: 2,
      seconds: 0,
    };

    const totalMilliseconds =
      (time.days * 24 * 60 * 60 +
        time.hours * 60 * 60 +
        time.minutes * 60 +
        time.seconds) *
      1000;

    if (totalMilliseconds > 0) {
      setStartTime(Date.now() + totalMilliseconds);
    }
  }, []);

  // Custom renderer function
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRendererProps) => {
    if (completed) {
      return <span>Time,s up!</span>;
    } else {
      return (
        <div className="text-xl font-bold text-slate-500 flex flex-wrap justify-center">
          <Button variant={"outline"} className="rounded-full bg-white">
            <span className="text-2xl font-semibold -mr-1.5 ">{days}</span>
            Day
          </Button>
          <span className="text-4xl px-2"> :</span>
          <Button variant={"outline"} className="rounded-full bg-white">
            <span className="text-2xl font-semibold -mr-1.5 ">{hours}</span>
            Hour
          </Button>
          <span className="text-4xl px-2"> :</span>
          <Button variant={"outline"} className="rounded-full bg-white">
            <span className="text-2xl font-semibold -mr-1.5 ">{minutes}</span>
            Minute
          </Button>
          <span className="text-4xl px-2"> :</span>
          <Button
            variant={"outline"}
            className="rounded-full bg-white text-red-600"
          >
            <span className="text-2xl font-semibold -mr-1.5 ">{seconds}</span>
            Seconds
          </Button>{" "}
        </div>
      );
    }
  };

  return (
    <div className="-mt-1">
      {startTime && <Countdown date={startTime} renderer={renderer} />}
    </div>
  );
};

export default Comedown;
