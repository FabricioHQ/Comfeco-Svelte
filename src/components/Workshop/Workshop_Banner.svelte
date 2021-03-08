<script>
</script>

<div class="banner_workshop">
  <div class="text">
    <p class="title">Ingresa a nuestros talleres</p>
    <p class="tagline">
      Ven y mejora tus habilidades de programador y diseñador
    </p>
  </div>
</div>

<style lang="scss">
  .banner_workshop {
    width: 100%;
    height: calc(100vh - 5rem);
    position: relative;
    background-image: url('/images/workshop/workshop_banner.jpg');
    background-size: cover;
    background-position: center;
    display: grid;
    place-items: center;
    overflow: hidden;
    z-index: 1;
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
    .text {
      position: absolute;
      margin-top: calc(-5rem / 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-title);
      .title {
        font-family: inherit;
        font-weight: 500;
        font-size: 40px;
        text-align: center;
        color: #fff;
        margin-bottom: 0.5rem;
      }
      .tagline {
        font-family: inherit;
        width: 320px;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        color: #fff;
      }
    }
  }
</style>
