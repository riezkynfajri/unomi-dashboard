<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add-scope">Add Scope</RouterLink>
        <RouterLink to="/profiles">Profiles</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss">
  @import "./assets/sass/main.scss";
</style>


