import Vue from 'vue';
import Vuex from 'vuex';
import repositoryService from '../services/repositoriesService';

const { getRepositoryInfo, getRepositoryList } = repositoryService;

Vue.use(Vuex);

const defaultRepositoryInfo = {
  name: '',
  description: '',
  watchers: 0,
  subscribers_count: 0,
  forks: 0,
  owner: {
    id: null,
    login: '',
    avatar_url: ''
  }
}

export default new Vuex.Store({
  state: {
    error: {
      isError: false,
      message: '',
    },
    isLoading: false,
    repositoriesList: [],
    repositoryInfo: defaultRepositoryInfo,
    filters: {
      userNameList: [],
    },
  },

  getters: {
    GET_ERROR: state => state.error,
    GET_LOADING: state => state.isLoading,
    GET_REPOSITORIES_LIST: state => state.repositoriesList,
    GET_REPOSITORIES_INFO: state => state.repositoryInfo,
    GET_FILTERS: state => state.filters,
  },

  mutations: {
    SET_ERROR: (state, payload) => state.error = { ...payload },
    SET_FILTERS_USER_LIST: (state, payload) => state.filters.userNameList = payload,
    RESET_ERROR: (state) => state.error = {
      isError: false,
      message: '',
    },
    SET_LOADING_ON: (state) => state.isLoading = true,
    SET_LOADING_OFF: (state) => state.isLoading = false,
    SET_REPOSITORY_INFO: (state, payload) => state.repositoryInfo = payload,
    SET_REPOSITORIES_LIST: (state, payload) => state.repositoriesList = payload,
  },

  actions: {
    FETCH_REPOSITORIES_LIST({ commit }, search) {
      if (!search.trim()) {
        commit('SET_REPOSITORIES_LIST', []);
        return;
      }
      commit('SET_LOADING_ON');
      getRepositoryList(search)
        .then(res => {
          commit('SET_FILTERS_USER_LIST', res.items.map(item => {
            return item.owner.login;
          }));
          commit('SET_REPOSITORIES_LIST', res.items);
        })
        .catch((error) => {
          commit('SET_ERROR', { isError: true, message: error.message });
        })
        .finally(() => {
          commit('SET_LOADING_OFF');
        });
    },
    FETCH_REPO_INFO({ commit }, { repositoryName, repositoryOwner }) {
      commit('SET_LOADING_ON');
      return getRepositoryInfo({ repositoryOwner, repositoryName })
        .then(repository => {
          commit('SET_REPOSITORY_INFO', repository);
          return repository;
        })
        .catch((error) => {
          commit('SET_ERROR', { isError: true, message: error.message });
          return error;
        })
        .finally(() => {
          commit('SET_LOADING_OFF');
        });
    },
  },

  modules: {},
});
