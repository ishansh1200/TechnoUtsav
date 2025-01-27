'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { config } from "../constants/config";
import {Header} from "@/components/atoms/Header";
import Waves from '@/components/Waves';

type TEvent = {
  name: string;
  date: string;
  description: string;
  icon: string;
  iconBg: string;
};

const events: TEvent[] = [
  {
    name: "Crack the Code",
    date: "Jan 15, 2025",
    description: "A coding challenge to solve puzzles and crack codes. An exercise to challenge aspiring developers headon with a series of coding challenges like pattern solving, brainstorming and the thing ever coder resents, DATA STRUCTURES.",
    icon: "path/to/icon1.png",
    iconBg: "#ff5733",
  },
  {
    name: "Blindfold Bytes",
    date: "Jan 16, 2025",
    description: "An exciting programming event with a twist!",
    icon: "path/to/icon2.png",
    iconBg: "#33c4ff",
  },
  {
    name: "Campus Quest",
    date: "Jan 17, 2025",
    description: "A thrilling scavenger hunt across campus.",
    icon: "path/to/icon3.png",
    iconBg: "#85e085",
  },
  {
    name: "Drone Racing",
    date: "Jan 18, 2025",
    description: "High-speed drone racing competition.",
    icon: "path/to/icon4.png",
    iconBg: "#ffdd33",
  },
  {
    name: "InnovateX",
    date: "Jan 19, 2025",
    description: "Showcase your innovative ideas and prototypes.",
    icon: "path/to/icon5.png",
    iconBg: "#ff5733",
  },
  {
    name: "No Bug Zone",
    date: "Jan 20, 2025",
    description: "Debugging challenges to test your skills.",
    icon: "path/to/icon6.png",
    iconBg: "#33c4ff",
  },
  {
    name: "Mecha Soccer",
    date: "Jan 21, 2025",
    description: "Robots competing in a soccer match.",
    icon: "path/to/icon7.png",
    iconBg: "#85e085",
  },
  {
    name: "Meta Madness",
    date: "Jan 22, 2025",
    description: "A metaverse-themed event with immersive experiences.",
    icon: "path/to/icon8.png",
    iconBg: "#ffdd33",
  },
  {
    name: "RouteRush",
    date: "Jan 23, 2025",
    description: "Networking challenges to test your routing skills.",
    icon: "path/to/icon9.png",
    iconBg: "#ff5733",
  },
];

const EventCard: React.FC<TEvent> = (event) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={event.date}
      iconStyle={{ background: event.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={event.icon}
            alt={event.name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{event.name}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {event.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const EventsTimeline = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.events} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(EventsTimeline, "events");
