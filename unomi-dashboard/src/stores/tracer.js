import { defineStore } from 'pinia';
import axios from 'axios';

export const useTracerStore = defineStore({
  id: 'tracer',
  state: () => ({
    URL: "http://localhost:8181/cxs",
    scopes: null,
    profiles: null,
    auth: {
      username: 'karaf',
      password: 'karaf'
    },
    createScopeData: {
      itemType: 'scope',
      metadata: {
        id: '',
        name: '',
        description: '',
      }
    }
  }),
  // getters: {},
  actions: {
    async addScope(e) {
      try {
        e.preventDefault();
        let itemId = this.createScopeData.metadata.id;

        await axios.request({
          method: "post",
          url: `${this.URL}/scopes`,
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          auth: { ...this.auth },
          data: { itemId, ...this.createScopeData },
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
          auth: { ...this.auth }
        });
        data.sort(function (a, b) {
          return a.metadata.id - b.metadata.id || a.metadata.id.localeCompare(b.metadata.id);
        });
        this.scopes = data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteScope(id) {
      try {
        await axios.request({
          method: "delete",
          url: `${this.URL}/scopes/${id}`,
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          auth: { ...this.auth }
        });
        
        let index = this.scopes.findIndex(el => el.itemId === id);
        this.scopes.splice(index, 1);
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async getProfiles() {
      try {
        const { data } = await axios.request({
          method: "post",
          url: `${this.URL}/profiles/search`,
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          auth: { ...this.auth },
        });
        console.log(data);
        // this.profiles = data;
      } catch (err) {
        console.log(err.response.data);
      }
    }
  }
});
