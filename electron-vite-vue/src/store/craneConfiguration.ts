import  {defineStore} from "pinia";
import craneConfiguration from '@/api/craneConfiguration'

export  const craneStore=defineStore('craneConfigure',{
   state:()=> {
     return {
        cranes:[]
     }
   },
  getters:{
     craneCount:(state) => state.cranes.length
  },
  actions:{
      async getCranes(){
        let response = await craneConfiguration.getCranes()
        this.$state.cranes = response.data
      }
  }
})
