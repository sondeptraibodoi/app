import { Dayjs } from "dayjs";

export interface User {
  id: string | number;
  avatar_url?: string;
  username: string;
  inactive: boolean;
  info?: any;
  is_sinh_vien: boolean;
  is_giao_vien: boolean;
  roles: string[];
  created_at: string;
  updated_at: string;
}

export interface ResetPassword {
  token: any;
  password: string;
  "confirm-password": string;
}

export interface EmailForgotPassword {
  username: string | number;
}
