const state = {
  device: 'desktop',
  test:'',
  woc:'woc1',
  testArr:{
    name:'测试名称2'
  }
}

const mutations = {
  setTest:state=>{
      console.log(state)
      state.test = '测试'
  }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
