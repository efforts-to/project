import axios from "axios";


export function request(config){
  const instace = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000,
  })
  //请求拦截器
  instace.interceptors.request.use(config=>{
    return config
  },err=>{
    return err
  })
  //响应拦截器
  instace.interceptors.response.use(res=>{
    return res;
  },err => {
    return err;
  })
  return instace(config)
}
