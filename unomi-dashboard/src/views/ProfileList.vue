<script>
import { mapActions, mapWritableState } from 'pinia';
import { useTracerStore } from '../stores/tracer';

export default {
    computed: {
        ...mapWritableState(useTracerStore, ['profiles'])
    },
    methods: {
        ...mapActions(useTracerStore, ['getProfiles'])
    },
    mounted() {
        this.getProfiles();
    }
};
</script>

<template>
    <div :key="i" v-for="(profile, i) in profiles">
        <div class="profiles">{{ profile }}</div>
    </div>
</template>