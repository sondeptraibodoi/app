import { AxiosResponse } from "axios";

export interface ValidationResponse extends AxiosResponse {
  status: 422;
  message: string;
  errors: Record<string, Array<string>>;
}

export interface Error400Response extends AxiosResponse {
  status: 400;
  message: string;
}

export interface ServerErrorResponse extends AxiosResponse {
  status: 500;
  message: string;
}
export interface Response401 extends AxiosResponse {
  status: 401;
  message: string;
}
export interface SuccessResponse<T> {
  data: T;
  message: string;
}
