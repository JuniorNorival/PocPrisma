export type Task = {
  title: string;
  responsibleId: number;
  description: string;
  date: Date;
  realized?: boolean;
};
