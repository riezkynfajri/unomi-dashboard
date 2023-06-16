<script>
import { mapActions, mapWritableState } from 'pinia';
import { useTracerStore } from '../stores/tracer';

export default {
  computed: {
    ...mapWritableState(useTracerStore, ['createScopeData'])
  },
  methods: {
    ...mapActions(useTracerStore, ['addScope'])
  }
}
</script>
<template>
  <div class="AddScope" style="display: flex;flex-direction: column;">
    <h1>add scope page</h1>
    <form @submit="addScope" style="display: flex;flex-direction: column; gap: 5px;">
      <label>scope id</label>
      <input v-model="createScopeData.metadata.id"/>
      <label>scope name</label>
      <input v-model="createScopeData.metadata.name"/>
      <label>scope description</label>
      <input v-model="createScopeData.metadata.description"/>
      <input type="submit" text="Submit"/>
    </form>
  </div>
</template>

