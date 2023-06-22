<script>
import { mapActions, mapWritableState } from 'pinia';
import { useTracerStore } from '../stores/tracer';
export default {
  computed: {
    ...mapWritableState(useTracerStore, ["scopes"])
  },
  methods: {
    ...mapActions(useTracerStore, ["getScopes", "deleteScope"])
  },
  mounted() {
    if (!this.scopes) this.getScopes();
  }
};
</script>
<template>
    <div :key="i" style="width:100%;display: flex; flex: 1; margin: auto;" class="scope-list" v-for="(scope, i) in scopes">
      <div style="display: flex; flex-direction: column;">
        <p>{{ scope.metadata.id }}</p>
        <p>V.{{ scope.version }}</p>
        <p>{{ scope.metadata.name }}</p>
        <p>{{ scope.metadata.description }}</p>
        <RouterLink :to="{ name: 'edit-scope', params: { id: scope.metadata.id } }">Edit</RouterLink>
        <button @click="deleteScope(scope.metadata.id)">Delete</button>
      </div>
    </div>
</template>
