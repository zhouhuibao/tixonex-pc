const state = {
  device: 'desktop',
  test:''
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
