export interface Dataset {
    name: string;
    description: string;
    refreshed_at: Date;
    newest_available_date: Date;
    oldest_available_date: Date;
    column_names: string[];
    frequency: string;
    type: string;
    premium: boolean;
    start_date: Date;
    end_date: Date;
    data: Array<string[]>;
  }
  