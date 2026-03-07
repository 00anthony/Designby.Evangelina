import {
  Heart,
  Users,
  Ribbon,
  MapPin,
  Calendar,
  Clock,
  Award,
} from "lucide-react";
import { EventConfig, QuickNavPill } from "./types";

export const events: EventConfig[] = [
  {
    number: 1,
    tag: "Fundraiser & Awareness",
    tagBg: "#e85d3f",
    title: "Community Cancer Benefit",
    subtitle: "Healing Through Community",
    description:
      "A heartfelt fundraising event uniting neighbors, local businesses, and advocates to support cancer patients and their families. Design by Evangelina contributes creative direction, signage, and print materials to help bring the mission to life visually.",
    details: [
      { icon: Calendar, text: "Annual — Date TBD" },
      { icon: MapPin, text: "London Community Hall, East End" },
      { icon: Clock, text: "10:00 am – 6:00 pm" },
      { icon: Heart, text: "Proceeds benefit local oncology support funds" },
    ],
    accentColor: "#e85d3f",
    stickyNoteColor: "#ffd6cc",
    tapeColor: "rgba(232,93,63,0.3)",
    icon: Ribbon,
    photoLayout: "row",
    photos: [
      { label: "Event Photo", rotate: "-3deg" },
      { label: "Community Photo", rotate: "2deg" },
      { label: "Highlights", rotate: "-1deg" },
    ],
    reversed: false,
    extra:
      "This event brings together survivors, supporters, and local healthcare providers for a day of storytelling, auction fundraising, live music, and community meals. Evangelina donates full creative services — from the event identity to printed programs and banners — every year.",
  },
  {
    number: 2,
    tag: "Reentry & Justice",
    tagBg: "#4a9cc8",
    title: "On-Point Reentry Conference",
    subtitle: "Pathways Back to Community",
    description:
      "The On-Point Reentry Conference connects returning citizens with employment resources, legal services, housing support, and mentorship. Evangelina provides branding and design services pro bono to amplify the conference's message and reach.",
    details: [
      { icon: Calendar, text: "Biannual — Spring & Fall" },
      { icon: MapPin, text: "City Convention Centre, London" },
      { icon: Clock, text: "9:00 am – 5:00 pm" },
      { icon: Users, text: "300+ attendees across two days" },
    ],
    accentColor: "#4a9cc8",
    stickyNoteColor: "#d4eaf7",
    tapeColor: "rgba(74,156,200,0.3)",
    icon: Users,
    photoLayout: "grid",
    photos: [
      { label: "Conference Photo", rotate: "-2deg" },
      { label: "Panel Discussion", rotate: "2deg" },
      { label: "Workshop", rotate: "-1.5deg" },
      { label: "Networking", rotate: "1deg" },
    ],
    reversed: true,
    extra:
      "On-Point brings keynote speakers, breakout workshops, resume clinics, and one-on-one mentoring sessions for people re-entering society after incarceration. The conference's creative identity — designed by Evangelina — reflects dignity, hope, and forward momentum.",
  },
  {
    number: 3,
    tag: "Professional Network",
    tagBg: "#7a9e7e",
    title: "NARP Conference",
    subtitle: "National Association of Reentry Professionals",
    description:
      "The NARP Conference gathers practitioners, policymakers, researchers, and advocates from across the country to advance best practices in reentry support. Evangelina contributes brand design and exhibition materials for this landmark annual gathering.",
    details: [
      { icon: Calendar, text: "Annual — National Convention" },
      { icon: MapPin, text: "Rotating Host City (Nationwide)" },
      { icon: Clock, text: "3-Day Conference" },
      { icon: Award, text: "Featuring reentry excellence awards" },
    ],
    accentColor: "#7a9e7e",
    stickyNoteColor: "#d8ead9",
    tapeColor: "rgba(122,158,126,0.35)",
    icon: Award,
    photoLayout: "row",
    photos: [
      { label: "Keynote Photo", rotate: "2deg" },
      { label: "Award Ceremony", rotate: "-2deg" },
      { label: "Expo Floor", rotate: "1.5deg" },
    ],
    reversed: false,
    extra:
      "NARP connects hundreds of reentry professionals for knowledge sharing, policy advocacy, and collaborative programming. As a design partner, Evangelina creates the annual conference identity, speaker materials, wayfinding signage, and commemorative print pieces.",
  },
];

export const quickNavPills: QuickNavPill[] = [
  { label: "Community Cancer Benefit", color: "#e85d3f", href: "#event-1" },
  { label: "On-Point Reentry Conf.", color: "#4a9cc8", href: "#event-2" },
  { label: "NARP Conference", color: "#7a9e7e", href: "#event-3" },
];