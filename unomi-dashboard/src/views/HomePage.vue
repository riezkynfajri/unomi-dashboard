<script>
import { mapActions, mapWritableState } from 'pinia';
import { useTracerStore } from '../stores/tracer';

export default {
  computed: {
    ...mapWritableState(useTracerStore, ["scopes"])
  },
  methods: {
    ...mapActions(useTracerStore, ["getScopes"])
  },
  mounted() {
    this.getScopes()
  }
}
</script>
<template>
  <main>
    <div class="scope-list" v-for="(scope,i) in scopes">
      <p :id="i">{{ scope }}</p>
    </div>
  </main>
</template>
