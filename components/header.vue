<script>
  import AppMenu from './menu'

  export default {
    name: 'app-header',
    components: {
      AppMenu
    }
  }
</script>

<template>
  <section class="hero is-info is-fullheight parallax">
    <div class="hero-head">
      <app-menu />
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-uppercase">
  				<b>Uma nova experiência de debate</b>
  			</h1>
        <h2 class="subtitle">
  				Crie seu melhor argumento
  			</h2>

        <a class="button is-link is-large" href="https://app.debate3d.com.br/app/#/app/dashboard">Explore</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $color: rgba(#209cee, .5);
  $transition: all 0.2s ease-in;

  @media screen and (max-width: 1023px) {
    .navbar-brand,
    .navbar-tabs {
      background-color: transparent;
      transition: $transition;

      &.is-active {
        background-color: $color;
      }
    }

    .hero.is-info .navbar-menu {
      opacity: 0;
      display: block;
      transition: $transition;

      &.is-active {
        background-color: $color;
        opacity: 1;
      }
    }
  }
</style>
