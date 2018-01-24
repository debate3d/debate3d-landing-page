<script>
  export default {
    name: 'app-header',
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

<template>
  <section class="hero is-info is-fullheight parallax">
    <div class="hero-head">
      <header class="navbar">

        <div class="navbar-brand">
          <span class="navbar-item">
            <img src="~/assets/img/icon.png" alt="Logo">
          </span>
          <span class="is-uppercase is-size-3 is-size-4-mobile">
            <span>Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>d</span></span>
          </span>
          <span
            class="navbar-burger burger"
            :class="{ 'is-active': isOpen }"
            data-target="navbarMenuHeroC" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div
          id="navbarMenuHeroC"
          class="navbar-menu"
          :class="{ 'is-active': isOpen }">
          <div class="navbar-end">
            <span class="navbar-item">
              <a href="https://debate3d.com.br/app/#/auth/register">
                Cadastre-se
              </a>
            </span>
            <span class="navbar-item">
              <a class="button is-info is-inverted" href="https://debate3d.com.br/app/#/auth/login">
                Login
              </a>
            </span>
          </div>
        </div>

      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-uppercase">
  				<b>Uma nova experiência de debate</b>
  			</h1>
        <h2 class="subtitle">
  				Crie seu melhor argumento
  			</h2>

        <a class="button is-link is-large" href="https://debate3d.com.br/app/#/app/dashboard">Explore</a>
      </div>
    </div>
  </section>
</template>
