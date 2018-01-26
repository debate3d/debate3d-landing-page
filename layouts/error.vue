<script>
  export default {
    props: ['error'],
    head () {
      return {
        title: 'Ops, página não encontrada'
      }
    }
  }
</script>

<template>
  <div class="error-page">
    <div>
      <figure class="image">
        <img src="~/static/icon.png" alt="Logo do Debat3D">
      </figure>
      <h1 class="title"> Ops, você esbarrou numa página que não existe </h1>
      <nuxt-link to="/" class="button is-info">Encontre a página inicial</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/principal";

  .error-page {
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      max-width: 400px;
      margin: 0 auto;
    }
  }
</style>
