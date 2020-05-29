import { userLogin,userInfo,isTokenValid } from '@/api/user';
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    device: 'desktop',
    loginInfo:{},
    userInfo:{},
    token:'',
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN:(state,token)=>{
    state.token = token
  },
  SET_LOGIN_INFO:(state,obj)=>{
    state.loginInfo = obj
  },
  SET_USER_INFO:(state,obj)=>{
    state.userInfo = obj
  }
}

const actions = {
    login({commit,state,dispatch},userInfo){
      // const {phone,password,smsCode,captchaImgCode,areaCode} = userInfo;
      return new Promise((resolve,reject)=>{
        userLogin(userInfo).then(res=>{
          if(res.statusCode === 0){  
            const {token} = res.content
            dispatch('getUserInfo',token)
            commit('SET_TOKEN',token)
            commit('SET_LOGIN_INFO',res.content)
            Message({
              type:'success',
              message:'登录成功'
            })
            setTimeout(()=>{
              resolve()
            },500)
          }else{
            reject()

          }
        }).catch(error => {
          reject(error)
        })
      
      })
    },
    getUserInfo({commit,state},token){
      return new Promise((resolve,reject)=>{
        userInfo().then(res=>{
          commit('SET_USER_INFO',res.content)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    tokenValid({commit,state},token){
      return new Promise((resolve,reject)=>{
        isTokenValid().then(res=>{
          const { statusCode } = res
          if (statusCode !== 0) {
            reject('token已过期')
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    resetToken({ commit }) {
      return new Promise(resolve => {
        // removeToken() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      })
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
