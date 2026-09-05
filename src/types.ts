export interface EventItem {
  id: string;
  number: string;
  name: string;
  category: 'technical' | 'non-technical';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  teamSize: string;
  format?: string;
  rules?: string[];
  highlights?: string[];
}

export interface ImportantDate {
  date: string;
  title: string;
  description: string;
  isMainEvent?: boolean;
}
