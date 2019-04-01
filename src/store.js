import Vue from 'vue'
import Vuex from 'vuex'
import {
  http
} from './services/http'
import { stat } from 'fs';
import { error } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    logado: localStorage.getItem('logado') || false,
  },
  mutations: {
    logar(state, response) {
      state.token = response.data.token,
      state.logado = true
    },
    deslogar (state) {
      state.logado = false
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('logado')
    }
  },
  actions: {
    login(context, form) {
      return new Promise((resolve, reject) => {
        http.post('/login', {
          email: form.email,
          senha: form.senha
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('logado', true)
          this.commit('logar', res)
          resolve(res)
        }).catch(error => {
          reject(error.response)
        })
      })

    },
    cadastrar(context, form) {
      return new Promise((resolve, reject) => {
        http.post('/usuario', form)
        .then(res => {
          resolve(res)
        }).catch(error => {
          reject(error.response)
        });
      })

    },
    deslogar(context) {
      console.log('deslogando');
      
      this.commit('deslogar')
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
    logado(state) {
      return state.logado
    },
  }
})
