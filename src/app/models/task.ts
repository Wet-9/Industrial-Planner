export interface Task {
    id: string;
    name?: string; 
    description?: string;
    date_of_start?: string; 
    date_of_end?: string;   
    status?: boolean;       
  }