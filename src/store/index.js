import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import { db } from "@/config/firebase-db";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      id: "",
      email: "",
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
      state.user.email = user.email;
      state.user.id = user.uid;
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
    bindKids: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef(
        "kids",
        db.collection("kids").orderBy("year", "asc")
      );
    }),
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
    addKid({ commit }, kid) {
      return new Promise((resolve, reject) => {
        db.collection("kids")
          .add({
            name: kid.name,
            schoo: kid.school,
            year: parseInt(kid.year),
            avatar: kid.avatar,
            consent: kid.consent,
          })
          .then(() => {
            commit("setIsSuccess", true);
            commit("setSuccessMessage", "New kid added!");
            resolve();
          })
          .catch((error) => {
            commit("setIsError", true);
            commit("setErrorMessage", error.message);
            reject();
          });
      });
    },
    userLogin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            commit("setUser", user);
            commit("setIsLoggedIn", true);
            resolve();
          })
          .catch(() => {
            commit("setIsError", true);
            commit("setErrorMessage", "Usu??rio ou senha incorreto");
            reject();
          });
      });
    },
    userLogout({ commit }) {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            commit("setUser", {});
            commit("setIsLoggedIn", false);
            resolve();
          })
          .catch(() => {
            commit("setIsError", true);
            commit("setErrorMessage", "Erro ao encerrar a sess??o");
            reject();
          });
      });
    },
  },
  modules: {},
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
    isLoading: (state) => state.isLoading,
    isError: (state) => state.isError,
    errorMessage: (state) => state.errorMessage,
    isSuccess: (state) => state.isSuccess,
    successMessage: (state) => state.successMessage,
    kids: (state) => state.kids,
  },
});

export default store;
