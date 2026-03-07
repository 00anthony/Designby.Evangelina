import type { LucideIcon } from "lucide-react";

export interface EventDetail {
  icon: LucideIcon;
  text: string;
}

export interface PhotoSlotConfig {
  label: string;
  rotate: string;
  image?: string;
}

export interface EventConfig {
  number: number;
  tag: string;
  tagBg: string;
  title: string;
  subtitle: string;
  description: string;
  details: EventDetail[];
  accentColor: string;
  stickyNoteColor: string;
  tapeColor: string;
  icon: LucideIcon;
  photoLayout: "row" | "grid" | "stack";
  photos: PhotoSlotConfig[];
  reversed: boolean;
  extra: string;
}

export interface QuickNavPill {
  label: string;
  color: string;
  href: string;
}