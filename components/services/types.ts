export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  detail?: { title: string; items: string[] }[];
}
