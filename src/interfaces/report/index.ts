import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  date_time?: any;
  type_of_issue?: string;
  description?: string;
  location?: string;
  reporter_id?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  type_of_issue?: string;
  description?: string;
  location?: string;
  reporter_id?: string;
  status?: string;
}
