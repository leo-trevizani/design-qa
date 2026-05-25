export interface IndustryCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  highlightText?: string;
  boldText?: string;
}

export interface StudioCardProps {
  title: string;
  studioName: string;
  shortdescription: string;
  gradientFrom: string;
  gradientTo: string;
  bullets: string[];
}
