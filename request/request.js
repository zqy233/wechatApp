// 封装一个promise方法用于微信小程序中进行接口的请求数据
export const request = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
         ...params,
         success:(result)=>{
             resolve(result);
         },
         fail:()=>{
             reject(err);
         }
        });
    })
}