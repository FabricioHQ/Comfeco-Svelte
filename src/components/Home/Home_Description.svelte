<section>
  <h2>Comfeco</h2>
  <p class="tagline">Una comunidad de desarrolladores donde puedas:</p>
  <div class="cards">
    <div class="card desarrollar">
      <div class="text">
        <h3>Desarrollar</h3>
        <p>
          Desarrolla aplicaciones de la vida real y mejora tus habilidades con
          retos que te desafiaran a sacar lo mejor de cada uno.
        </p>
      </div>
    </div>
    <div class="card aprender">
      <div class="text">
        <h3>Aprender</h3>
        <p>
          Adquiere conocimiento en cada uno de los eventos organizados en
          Comfeco con el fin que te desenvuelvas en la vida real con
          problemáticas reales.
        </p>
      </div>
    </div>
    <div class="card conocer">
      <div class="text">
        <h3>Conocer</h3>
        <p>
          Desarrolla aplicaciones de la vida real y mejora tus habilidades con
          retos que te desafiaran a sacar lo mejor de cada uno.
        </p>
      </div>
    </div>
    <div class="card ganar">
      <div class="text">
        <h3>Ganar</h3>
        <p>
          Desarrolla aplicaciones de la vida real y mejora tus habilidades con
          retos que te desafiaran a sacar lo mejor de cada uno.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-top: 5rem;
      font-family: var(--font-title);
      font-size: 32px;
      font-weight: 500;
      color: var(--color-primary-1);
    }
    p.tagline {
      width: 360px;
      margin-top: 0.25rem;
      font-family: var(--font-title);
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: var(--color-black-1);
    }
    .cards {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      max-width: 95%;
      justify-content: center;

      .card {
        width: 240px;
        height: 300px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: saturate(0);
        transition: 0.5s;
        margin: 0 1.5rem;
        margin-bottom: 3rem;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow) var(--color-gray-1);
        position: relative;
        overflow: hidden;

        &.desarrollar {
          background-image: url('/images/home/home-description-desarrollar.jpg');
        }
        &.aprender {
          background-image: url('/images/home/home-description-aprender.jpg');
        }
        &.conocer {
          background-image: url('/images/home/home-description-conocer.jpg');
        }
        &.ganar {
          background-image: url('/images/home/home-description-ganar.jpg');
        }

        &:hover {
          filter: saturate(1);
        }
        &:hover > .text {
          height: 100%;
        }
        &:hover > .text > p {
          display: block;
        }
        &:hover > .text > h3 {
          font-size: 18px;
        }
        .text {
          width: 100%;
          height: 40px;
          background-color: rgba($color: #000000, $alpha: 0.5);
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 0.5s;

          h3 {
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 16px;
            color: var(--color-white-1);
            transition: font-size 0.5s;
          }

          p {
            display: none;
            width: 90%;
            margin-top: 0.35rem;
            font-family: var(--font-title);
            font-weight: 300;
            font-size: 14px;
            color: var(--color-white-1);
            text-align: center;
            transition: display 0.5s;
          }
        }
      }
    }
  }
</style>
