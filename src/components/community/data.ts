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
      { icon: Calendar, text: "July 12, 2025" },
      { icon: MapPin, text: "2100 E. 3rd st., Austin, TX 78702" },
      { icon: Clock, text: "12:00 pm – 5:00 pm" },
      { icon: Heart, text: "All proceeds benefited one person in need" },
    ],
    accentColor: "#e85d3f",
    stickyNoteColor: "#ffd6cc",
    tapeColor: "rgba(232,93,63,0.3)",
    icon: Ribbon,
    photoLayout: "grid",
    photos: [
      {
        src: "/communityService/cancer-poster.png",
        alt: "Community cancer benefit poster",
        rotate: "rotate-[-2deg]",
        label: "7/12/2025",
      },
      {
        src: "/communityService/cancer-bbq.png",
        alt: "Evangelina barbequeing",
        rotate: "rotate-[1.5deg]",
        label: "7/12/2025",
      },
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
      { icon: Calendar, text: "Nov. 5-8, 2024" },
      { icon: MapPin, text: "Austin, Texas" },
      { icon: Clock, text: "9:00 am – 5:00 pm" },
      { icon: Users, text: "300+ attendees across three days" },
    ],
    accentColor: "#4a9cc8",
    stickyNoteColor: "#d4eaf7",
    tapeColor: "rgba(74,156,200,0.3)",
    icon: Users,
    photoLayout: "grid",
    photos: [
      {
        src: "/communityService/on-point-solo.png",
        alt: "",
        rotate: "rotate-[-2deg]",
        label: "2024",
      },
      {
        src: "/communityService/on-point-group.png",
        alt: "",
        rotate: "rotate-[-2deg]",
      },
      {
        src: "/communityService/on-point-group2.jpg",
        alt: "",
        rotate: "rotate-[-2deg]",
        
      },
      {
        src: "/communityService/on-point-shirt.jpg",
        alt: "",
        rotate: "rotate-[-2deg]",
        label: "<3",
      },
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
      "The NARP Conference gathers practitioners, policymakers, researchers, and advocates from across the country to advance best practices in reentry support, all of which Evangelina is a lifetime member and advocate for.",
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
      {
        src: "/communityService/NARP-logo.jpg",
        alt: "coming soon",
        rotate: "rotate-[-2deg]",
        label: "",
      },
    ],
    reversed: false,
    extra:
      "NARP connects hundreds of reentry professionals for knowledge sharing, policy advocacy, and collaborative programming.",
  },
  {
    number: 4,
    tag: "Reentry Advocacy",
    tagBg: "#b8a9d4",
    title: "Independent Speaker",
    subtitle: "Advocating for Second Chances",
    description:
      "Evangelina was invited to speak inside a correctional facility, sharing her journey and advocating for stronger reentry programs that help individuals transition back into society with dignity, opportunity, and support. Her talk focused on resilience, accountability, and the power of community partnerships in creating real pathways forward.",
    details: [
      { icon: Calendar, text: "Guest Speaking Engagement" },
      { icon: MapPin, text: "Texas Correctional Facility" },
      { icon: Clock, text: "Advocacy & Q&A Session" },
      { icon: Users, text: "Inmates preparing for reentry" },
    ],
    accentColor: "#b8a9d4",
    stickyNoteColor: "#ccbceb",
    tapeColor: "rgba(184, 169, 212, 0.35)",
    icon: Users,
    photoLayout: "grid",
    photos: [
      {
        src: "/communityService/on-point-speech2.png",
        alt: "Evangelina speaking about reentry advocacy",
        rotate: "rotate-[-2deg]",
      },
      {
        src: "/communityService/on-point-speech.png",
        alt: "Evangelina presenting to incarcerated audience",
        rotate: "rotate-[-2deg]",
      },
    ],
    reversed: true,
    extra:
      "Speaking directly with incarcerated individuals about the realities of reentry is one of the most meaningful aspects of Evangelina’s advocacy. By sharing personal insight and professional experience, she encourages participants to envision life beyond incarceration and highlights the critical role that mentorship, education, and community support play in successful reintegration.",
  },
];

export const quickNavPills: QuickNavPill[] = [
  { label: "Community Cancer Benefit", color: "#e85d3f", href: "#event-1" },
  { label: "On-Point Reentry Conf.", color: "#4a9cc8", href: "#event-2" },
  { label: "NARP Conference", color: "#7a9e7e", href: "#event-3" },
  { label: "Independent Speaker", color: "#b8a9d4", href: "#event-4"},
];