<script>
import { mapWritableState, mapActions } from 'pinia';
import { useTracerStore } from '../stores/tracer';

export default {
  computed: {
    ...mapWritableState(useTracerStore, ['createScopeData'])
  },
  methods: {
    ...mapActions(useTracerStore, ['getScopeDetail', 'editScope'])
  },
  mounted() {
    this.getScopeDetail(this.$route.params.id)
  }
};
</script>
<template>
  <div class="EditScope" style="display: flex;flex-direction: column;">
    <p>Edit Scope</p>
    <form @submit="editScope" style="display: flex;flex-direction: column; gap: 5px;">
      <label>scope name</label>
      <input v-model="createScopeData.metadata.name"/>
      <label>scope description</label>
      <input v-model="createScopeData.metadata.description"/>
      <input type="submit" text="Submit"/>
    </form>
  </div>
</template>