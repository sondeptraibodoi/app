import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface RequestOptions {
  withoutToken?: boolean;
  isCancelToken?: boolean;
  joinPrefix?: boolean;
  authenticationScheme?: string;
  urlPrefix?: string;
  withCsrf?: boolean;
}

export abstract class AxiosTransform {
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  transformRequestHook?: (res: AxiosResponse, options: RequestOptions) => any;

  requestCatchHook?: (e: Error, options: RequestOptions) => any;

  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions
  ) => AxiosRequestConfig;

  requestInterceptorsCatch?: (error: Error) => void;

  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  responseInterceptorsCatch?: (error: Error) => void;
}
