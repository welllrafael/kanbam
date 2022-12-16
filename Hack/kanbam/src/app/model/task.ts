export interface Task {
    id: string;
    title: string;
    description: string;
    stage: number;
    status?: number;
    idUser: string;
  }