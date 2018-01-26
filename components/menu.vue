<script>
  export default {
    name: 'app-menu',
    data: () => ({
      isOpen: false
    }),
    methods: {
      toggleMenu () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<template lang="html">
  <header class="navbar">

    <div class="navbar-brand" :class="{ 'is-active': isOpen }">
      <nuxt-link class="is-uppercase" to="/">
        <span class="navbar-item">
          <img src="~/assets/img/icon.png" alt="Logo">
        </span>
      </nuxt-link>
      <span class="is-uppercase is-size-3 is-size-4-mobile">
        <span>Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>d</span></span>
      </span>
      <span
        class="navbar-burger burger"
        :class="{ 'is-active': isOpen }"
        @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div
      class="navbar-menu"
      :class="{ 'is-active': isOpen }">
      <div class="navbar-end">
        <span class="navbar-item">
          <a href="https://debate3d.com.br/app/#/auth/register">
            Cadastre-se
          </a>
        </span>
        <span class="navbar-item">
          <a class="button is-info" href="https://debate3d.com.br/app/#/auth/login">
            Login
          </a>
        </span>
      </div>
    </div>

  </header>
</template>
