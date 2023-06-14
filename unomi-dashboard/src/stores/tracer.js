import { defineStore } from 'pinia';
import axios from 'axios';

export const useTracerStore = defineStore({
  id: 'tracer',
  state: () => ({
    URL: "http://localhost:8181/cxs",
    scopes: null,
    createScopeData: {
      itemId: 'test-app-1',
      itemType: 'scope',
      metadata: {
        id: 'test-app-1',
        name: 'test app 1',
        description: 'this is the first test',
      }
    }
  }),
  // getters: {},
  actions: {
    async addScope() {
      try {
        const { data } = await axios.request({
          method: "post",
          url: `${this.URL}/scopes`,
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          auth: {
            username: 'karaf',
            password: 'karaf'
          },
          data: { ...this.createScopeData },
        });
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async getScopes() {
      try {
        const { data } = await axios.request({
          method: "get",
          url: `${this.URL}/scopes`,
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          auth: {
            username: 'karaf',
            password: 'karaf'
          }
        });
        this.scopes = data;
      } catch (err) {
        console.log(err);
      }
    }
  }
});
