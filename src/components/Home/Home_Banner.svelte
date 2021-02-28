<script>
</script>

<header>
  <div class="header-banner">
    <div class="header__container">
      <h1 class="title">Community Fest and Code</h1>
      <h2 class="title title__subtitle">¡Inicia el 2021 aceptando el reto!</h2>
      <!-- <div class="text"> -->
      <p class="slogan">
        Participa del primer festival de código en hispanoamérica hecho por
        desarrolladores, para desarrolladores
      </p>
      <!-- </div> -->
    </div>
  </div>
  <!-- <div class="clear">
  </div> -->
</header>

<style lang="scss">
  .header-banner {
    width: 100%;
    height: calc(70vh - 5rem);
    position: relative;
    background-image: url('/images/home/home-banner.jpg');
    background-size: cover;
    background-position: center;
    display: grid;
    place-items: center;
    overflow: hidden;
    z-index: 1;

    /* height: max-content; */
    /* background: url(main.css); */
    /* background: linear-gradient(0deg, transparent, #00000087 0%), url('/images/home/home-banner.jpg'); */
    background-repeat: no-repeat;
    /* background-size: cover; */
    font-family: 'roboto', sans-serif;
    font-weight: 700;
    padding: 6.25rem 3.438rem 0px 3.438rem;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 7.5px;
      background: linear-gradient(
        270deg,
        var(--color-terciary-1),
        var(--color-primary-1),
        var(--color-secondary-1)
      );
    }

    /* .text {
      position: absolute;
      margin-top: calc(-5rem / 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-title); */

    /* .title {
        font-family: inherit;
        font-weight: 500;
        font-size: 40px;
        text-align: center;
        color: #fff;
        margin-bottom: 0.5rem;
      } */

    /* .tagline {
        font-family: inherit;
        width: 320px;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        color: #fff;
      } */

    /* } */
  }

  div {
    display: block;
  }

  .header__container {
    max-width: 61.25rem;
    /* margin-left: auto; */
    margin-right: auto;
  }

  .title {
    margin-top: 0;
    font-size: 35.9765px;
    line-height: 42px;
    font-weight: inherit;
    border: none;
    color: #fff;
  }

  .title__subtitle {
    margin-top: 25px;
    font-size: 31.17px;
    line-height: 37px;
  }

  .slogan {
    margin-top: 30px;
    font-size: 21.17px;
    line-height: 24.81px;
    font-weight: 400;
    max-width: 470px;
  }

  .title,
  .slogan {
    border: none;
    color: #fff;
  }

  /* h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  } */

  /* h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  } */

  /* blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  } */

  /* h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  } */

  /* p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  } */

  /* .header-banner {
    height: max-content;
    background: url(main.css);
    background: linear-gradient(0deg, transparent, #00000087 0%), url('/images/home/home-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "roboto", sans-serif;
    font-weight: 700;
    padding: 6.25rem 3.438rem 0px 3.438rem;
  } */

  /* *,
  :after,
  :before {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
  } */

  @media only screen and (max-width: 960px) {
    /* para manejar el renderizado  */
  }
</style>
