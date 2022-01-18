export interface Value {
  id: number;
  name: string;
  description: string;
  icon?: string;
}

export interface Benefit {
  id: number;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  pictureUrl: string;
  email: string;
}
