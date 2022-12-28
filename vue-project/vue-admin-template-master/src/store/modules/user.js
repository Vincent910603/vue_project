import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter,asyncRoutes,constantRoutes,anyRoutes } from '@/router'
import router from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    //存储用户头像
    avatar: '',
    //服务器返回的菜单信息【根据不同的角色：返回的标记信息，数组里面的元素是字符串】
    routes:[],
    //角色信息
    roles:[],
    //按钮权限的信息
    buttons:[],

    resultAsyncRoutes:[],
    resultAllRoutes:[]
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO:(state,userInfo)=>{
    //用户名
     state.name = userInfo.name;
     //用户头像
     state.avatar = userInfo.avatar;
     //菜单权限标记
     state.routes = userInfo.routes;
     //按钮权限标记
     state.buttons = userInfo.buttons;
     //角色
     state.roles = userInfo.roles;
  },
  SET_RESULTASYNCROUTES:(state,asyncRoutes)=>{
    state.resultAsyncRoutes = asyncRoutes
   state.resultAllRoutes = constantRoutes.concat(state.resultAsyncRoutes,anyRoutes)
   router.addRoutes(state.resultAllRoutes)
  }
}
const computedAsyncRoutes = (asyncRoutes,routes)=>{
 return asyncRoutes.filter(item=>{
    if(routes.indexOf(item.name)!=-1){
      if(item.children&&item.children.length){
        item.children = computedAsyncRoutes(item.children,routes)
      }
      return true;
    }
  })
}
const actions = {
  // user login
 async login({ commit }, userInfo) {
     const { username, password } = userInfo
     let result = await login({ username: username.trim(), password: password })
     if(result.code==20000){
      commit('SET_TOKEN', result.data.token)
      setToken(result.data.token)
      return 'ok';
     }else{
      return new Promise.reject(new Error('faile'))
     }
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        commit('SET_USERINFO',data);
        commit('SET_RESULTASYNCROUTES',computedAsyncRoutes(asyncRoutes,data.routes))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
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

