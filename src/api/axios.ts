/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, {  AxiosRequestConfig } from "axios";
import { Notification } from "element-ui";
import { BaseURL } from "./enum";

const HttpStatusMessage: { [key: number]: string } = {
  0: "服务器发生了未知的错误，请联系管理员",
  401: "登陆过期，请重新登陆",
  403: "没有权限访问，请联系管理员",
  404: "服务器发生了错误，请联系管理员",
  408: "服务器连接超时，请刷新页面或联系管理员",
  500: "服务器发生了错误，请联系管理员"
};
const env: "development" | "production" = process.env.NODE_ENV;

const baseURL = BaseURL[env] || BaseURL.production;
// const baseURL = BaseURL.production;
const axiosOption: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true,
  timeout: 30000
};

const $axios = axios.create(axiosOption);

const apiError = (message: string, status?: number) =>
  Notification({
    title: `错误代码：${status || 0}`,
    message,
    type: "error",
    duration: env === "development" ? 1500 : 0
  });

const error403 = () => {
  apiError("没有权限访问", 403);
};

let timeout: number;

// 拦截器
axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      apiError("网络超时",408);
      return Promise.reject(error);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    if (error.response && error.response.status === 401) {
      setTimeout(() => {
        window.localStorage.setItem(
          "jumpRoute",
          document.location.href.split("#")[1]
        );
        // window.location.href ="跳转登录页面";
      }, 500);
    } else if (error.response && error.response.status === 404) {
      apiError("404 not found", 404);
    } else if (error.response && error.response.status === 403) {
      apiError( "没有权限访问，请联系管理员",403 );
    } else {
      apiError( "服务器发生了错误，请稍后重试。", 500);
    }
    return;
  }
);

// 防抖节流
// const VueDebounce = (func: Function, time: number) => {
//   let timeout: number| null;
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const that = this;
//   return (time: number | undefined, ...args: any[]) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func.apply(that, args)
//     }, time);
//   };
// }

// const VueThrottle = (func: Function, time: number)=>{
//   let canRun = true;
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const that = this;
//   return (...args: any[]) => {
//     if (!canRun) return;
//     canRun = false;
//     setTimeout(() => {
//       func.call(that, args)
//       canRun = true
//     }, time);
//   }
// }

// export default { 
//   $post(url: string, data: object) {
//     return new Promise((resolve, reject) => {
//       axios
//         .post(url, data)
//         .then(
//           res => {
//             if (!res) {
//               return;
//             }
//             if (res.data && res.data.errorcode === 1) {
//               Notification(res.data.errormsg);
//               reject(res.data);
//             } else {
//               resolve(res.data);
//             }
//           },
//           res => {
//             reject(res);
//           }
//         )
//         .catch((err: string) => {
//           reject(err);
//         });
//     });
//   },

//   $get(url: string, params: object) {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(url, { params })
//         .then(
//           res => {
//             if (!res) {
//               return;
//             }
//             if (res.data && res.data.errorcode === 1) {
//               Notification(res.data.errormsg);
//               reject(res.data);
//             } else {
//               resolve(res.data);
//             }
//           },
//           res => {
//             reject(res);
//           }
//         )
//         .catch((err: string) => {
//           reject(err);
//         });
//     });
//   }
// }


export interface HbnRes {
  data: any;
  extdata?: any;
  errorcode: number;
  errormsg: string;
}
export interface HbnResWithConfig extends HbnRes {
  _data: any;
  _method: "get" | "post";
}
export interface HbnPostData {
  args?: any;
  data?: any;
}
const resPromise = (data: HbnRes, config: any) =>
  data.errorcode === 0
    ? Promise.resolve<HbnResWithConfig>({ ...data, ...config })
    : Promise.reject<HbnResWithConfig>({ ...data, ...config });

export class HbnAxios {
  private baseUrl!: string;
  constructor(_baseUrl?: string, _api?: string) {
    if (_baseUrl) {
      this.baseUrl = _baseUrl + "/" + _api + "/";
    } else {
      this.baseUrl = "";
    }
  }
  async post(url: string, args?: any, data?: any) {
    const res = await $axios.post<HbnResWithConfig>(this.baseUrl + url, {
      args,
      data
    });
    const _data = res.config.data ? JSON.parse(res.config.data) : {};
    return resPromise(res.data, { _data, _methods: "post" });
  }
  async get(url: string, params?: any) {
    const res = await $axios.get<HbnResWithConfig>(this.baseUrl + url, {
      params
    });
    const _data =
      res.config && res.config.data ? JSON.parse(res.config.data) : {};
    return resPromise(res.data, { _data, _methods: "get" });
  }
}

export const axiosEnums = new HbnAxios();

