<script>
  import AppHeader from '~/components/header'
  import AppFooter from '~/components/footer'

  export default {
    name: 'index-page',
    components: {
      AppHeader,
      AppFooter
    },
    head () {
      return {
        title: 'Conheça o Debate3D - Uma nova experiênia de debate'
      }
    }
  }
</script>

<template>
  <div>
    <app-header />

    <section class="hero is-info section-one">
      <div class="container has-text-centered" id="fraseone">
        <div class="has-text-centered">
          <h2 class="title is-size-4-mobile">
  				  Acreditamos que o aprendizado <br> é o único caminho para o sucesso.
          </h2>
          <h2 class="subtitle">É nesse caminho que as ideias se encontram.</h2>
        </div>

        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/yFxKbKD1HX4?version=3&autoplay=0&rel=0&mute=0&controls=0&loop=0&playlist=yFxKbKD1HX4" frameborder="0" gesture="media" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="moderador">
      <h2 class="title is-uppercase has-text-centered is-size-4-mobile">
        Desenvolvemos um caminho inovador <br>para você debater suas ideias
      </h2>

      <article class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child has-image">
              <div>
                <img src="~/assets/img/tema.png">
              </div>
            </div>

            <div class="tile is-child">
              <h3 class="title is-uppercase"> //imparcial </h3>
              <h3 class="subtitle">O <span class="is-uppercase">Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>D</span></span> é uma tecnologia que dá suporte aos diferentes grupos e movimentos políticos, educativos, religiosos e até esportivos. Aqui é você que promove o debate. Sendo um moderador você poderá criar temas <span>Públicos</span> ou <span>Privados</span> e mobilizar debatedores.</h3>

              <div class="container-description">
                <p>No menu principal clique na opção "Criar Temas".<br>

                  <i class="fa fa-pencil-square-o" aria-hidden="true">&nbsp; &nbsp; Crie o título e o conteúdo descritivo</i><br>
                  <i class="fa fa-picture-o" aria-hidden="true">&nbsp; &nbsp; Envie uma imagem que represente o assunto (1000px por 400px)</i><br>
                  <i class="fa fa-thumbs-o-up" aria-hidden="true">&nbsp; &nbsp; Selecione o tipo de posicionamento que espera dos debatedores</i><br>
                  <i class="fa fa-toggle-on" aria-hidden="true">&nbsp; &nbsp; Escolha entre um tema privado ou público</i><br>
                  <i class="fa fa-tags" aria-hidden="true">&nbsp; &nbsp; Marque a categoria do tema com tags.</i>
                </p>
              </div>

              <a class="button is-link" href="https://goo.gl/forms/cmCDRJQaUP7V5DjF3"><h1 class="is-uppercase"><span>Seja um moderador</span></h1></a>
            </div>
          </div>
        </div>
      </article>

      <article class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child has-image">
              <div>
                <img src="~/assets/img/enquete.png">
              </div>
            </div>

            <article class="tile is-child">
              <h3 class="title is-uppercase">//interativo</h3>
              <h3 class="subtitle">
                Leve o <span class="is-uppercase">Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>D</span></span> para a sala de aula, eventos e reuniões. Organize a melhor experiênia de debate presencial com interatividade. Aulas mais dinâmicas e divertidas, reuniões mais democráticas, valorizando sempre o mérito das ideias. Aqui você terá resultados em tempo real de como os usuários se posicionam.
    					</h3>

              <p class="container-description">Fale conosco:</p>

              <button class="button is-success">
                <i class="fa fa-whatsapp"></i>
                <span class="is-uppercase"> <span> whatsapp: (21) 99225-1180 </span></span>
              </button>

            </article>
          </div>
        </div>
      </article>

      <article class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child has-image">
              <div>
                <img src="~/assets/img/cards.png">
              </div>
            </div>

            <div class="tile is-child">
              <h3 class="title is-uppercase">//organizado</h3>
              <h3 class="subtitle">
                Você participa de debates nas redes sociais como facebook, twitter e whatsapp? Se você piscar o olho vai ter que ler centenas de comentários e provavelmente você não tem tempo para acompanhar. <br>O <span class="is-uppercase">Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>D</span></span> organiza isso pra você.  Convide seus amigos para o debate criando seus CARDs com os argumentos, conforme seus amigos reagem interagindo com os CARDs nós vamos organizando os melhores para você.
    				  </h3>

              <div class="container-description">
                <p>
                  Os CARDs são organizados por pontos.<br> > Likes = 5pts<br> > Dislikes = -1pt<br> > Deck = 10pts<br>
                </p>
              </div>

              <a class="button is-link" href="https://debate3d.com.br/app/#/auth/register"><h1 class="is-uppercase"><b>Seja um debatedor</b></h1></a>
            </div>
          </div>
        </div>
      </article>

      <article class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child has-image">
              <div><img src="~/assets/img/cardinterativo.png" width="70%"></div>
            </article>
            <article class="tile is-child">
              <h1 class="title is-uppercase">//integrado</h1>
              <h1 class="subtitle">O <span class="is-uppercase">Debate<span style= color:#00AFEF>3</span><span style= color:#ED3237>D</span></span> é integrado ao <b>facebook</b>, <b>linkedin</b>, <b>twitter</b> e <b>whatsapp</b>. Você pode compartilhar os temas de debate nas suas redes sociais e também buscar apoio para seus argumentos. Também é possível incorporar vídeos do <b>youtube</b> no CARD para fortalecer seus argumentos.</h1><br>
              <p>
                Atualize seu perfil informando suas redes sociais. Quanto mais você interage, mais pontos ganha e mais destaque no ranking. Aumente sua rede de amizades e promova mais seguidores.<br> Mobilize seus amigos!</p>
              <br>
              <a class="button is-link" href="https://www.facebook.com/notes/debate3d/como-organizar-debates-no-grupo-do-whatsapp/1561271200627030/"><h1 class="is-uppercase"><b>Saiba mais</b></h1></a>
            </article>
          </div>
        </div>
      </article>
    </section>

    <section class="hero is-medium is-info landing-hero-phrase">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title" style="font-style: italic">
  					&ldquo; Ver as coisas de forma coletiva nos faz enxergar através da visão de todos &rdquo;
            <br>
            Ray Dalio
  			  </h2>

          <h3 class="subtitle has-text-weight-bold">
  				  Viva essa experiência!
  			  </h3>

          <a class="button is-info is-large is-inverted is-outlined" href="https://debate3d.com.br/app/#/app/dashboard">Explore</a>
        </div>
      </div>
    </section>

    <app-footer />
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/principal";
</style>
