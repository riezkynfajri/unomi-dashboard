<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-page" style="display: flex;height: 100vh; width: 100vw;">

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
  </div>
</template>
<style lang="scss">
  @import "./assets/sass/main.scss";
</style>


