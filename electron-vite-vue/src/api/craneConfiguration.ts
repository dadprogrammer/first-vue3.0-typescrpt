import http from 'axios'
export  default {
  /**
   * 获取天车配置
   * @returns {Promise<AxiosResponse<any>>}
   */
  getCranes() {
    return http.request({
      url: `/crane/config`,
      method: 'get'
    })
  },

  /**
   * 获取单台天车配置
   * @returns {Promise<AxiosResponse<any>>}
   */
  getSingleCrane(id:number) {
    return http.request({
      url: `/crane/config/${id}`,
      method: 'get'
    })
  },


  /**
   * 修改单台天车配置
   * @returns {Promise<AxiosResponse<any>>}
   */
  updateSingleCrane(id:number, model:any) {
    return http.request({
      url: `/crane/config/${id}`,
      method: 'put',
      data: model
    })
  },


}
