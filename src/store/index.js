import Vue from "vue";
import Vuex from "vuex";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {vuexfireMutations, firestoreAction} from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "",
      name: "",
      email: "",
      avatar: "",
      token: ""
    },
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
    kids: [],
  },
  mutations: {
    ...vuexfireMutations,
    setUser(state, user) {
      state.user = user;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setIsError(state, isError) {
      state.isError = isError;
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
    setIsSuccess(state, isSuccess) {
      state.isSuccess = isSuccess;
    },
    setSuccessMessage(state, successMessage) {
      state.successMessage = successMessage;
    },
    setKids(state, kids) {
      state.kids = kids;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setIsLoggedIn({ commit }, isLoggedIn) {
      commit("setIsLoggedIn", isLoggedIn);
    },
    setIsLoading({ commit }, isLoading) {
      commit("setIsLoading", isLoading);
    },
    setIsError({ commit }, isError) {
      commit("setIsError", isError);
    },
    setErrorMessage({ commit }, errorMessage) {
      commit("setErrorMessage", errorMessage);
    },
    setIsSuccess({ commit }, isSuccess) {
      commit("setIsSuccess", isSuccess);
    },
    setSuccessMessage({ commit }, successMessage) {
      commit("setSuccessMessage", successMessage);
    },
    bindKids: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("kids", getFirestore.firestore().collection("kids"));
    }),
    userLogin({ commit }, payload) {
      const auth = getAuth();
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          commit("setUser", user);
          commit("setIsLoggedIn", true);
          resolve();
        })
        .catch(() => {
          commit("setIsError", true);
          commit("setErrorMessage", "Usuário ou senha incorreta");
          reject();
        });      
      });
    },
    userLogout({ commit }) {
      const auth = getAuth();
      return new Promise((resolve, reject) => {
        auth.signOut().then(() => {
          commit("setUser", {});
          commit("setIsLoggedIn", false);
          resolve();
        }).catch(() => {
          commit("setIsError", true);
          commit("setErrorMessage", "Erro ao encerrar a sessão");
          reject();
        });
      });
    }
  },
  modules: {},
  getters: {
    user: state => state.user,
    isLoggedIn: state => state.isLoggedIn,
    isLoading: state => state.isLoading,
    isError: state => state.isError,
    errorMessage: state => state.errorMessage,
    isSuccess: state => state.isSuccess,
    successMessage: state => state.successMessage,
    kids: state => state.kids,
  }
});
