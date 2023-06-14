<script>
import { mapActions } from 'pinia';
import { useTracerStore } from '../stores/tracer';

export default {
  methods: {
    ...mapActions(useTracerStore, ['addScope'])
  }
}
</script>
<template>
  <div class="AddScope">
    <h1>add scope page</h1>
    <button @click="addScope">add scope</button>
  </div>
</template>

