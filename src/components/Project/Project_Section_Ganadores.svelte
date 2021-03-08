<section class="component">
  <h2>Últimos ganadores</h2>
  <div class="ganadores">
    <div class="ganador">
      <div class="background" />
      <div class="text">
        <div class="title">
          <h3>Team Svelte 2</h3>
          <span>#1</span>
        </div>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
        <button>View web</button>
      </div>
    </div>
    <div class="ganador">
      <div class="background" />
      <div class="text">
        <div class="title">
          <h3>Team React 35</h3>
          <span>#2</span>
        </div>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
        <button>View web</button>
      </div>
    </div>
    <div class="ganador">
      <div class="background" />
      <div class="text">
        <div class="title">
          <h3>Team Vue 5</h3>
          <span>#3</span>
        </div>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
        <button>View web</button>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  section.component {
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

    .ganadores {
      width: 90%;
      max-width: 46rem;
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;

      .ganador {
        width: 20rem;
        height: 20rem;
        position: relative;
        margin: 0 1.5rem 3rem 1.5rem;
        background-color: var(--color-white-1);
        border-radius: var(--border-radius);
        position: relative;

        .background {
          width: 20rem;
          height: 20rem;
          background-image: url('/images/projects/projects_banner.jpg');
          background-size: cover;
          background-position: center;
          z-index: 0;
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius);

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
        }
        .text {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding: 1.5rem 2rem;
          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            h3 {
              font-family: var(--font-title);
              font-weight: 500;
              font-size: 18px;
              color: var(--color-white-1);
            }
            span {
              font-family: var(--font-title);
              font-weight: 500;
              font-size: 24px;
              color: var(--color-secondary-1);
            }
          }
          p {
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 15px;
            color: var(--color-white-1);
          }
          button {
            height: 2rem;
            padding: 0 1.5rem;
            border-radius: var(--border-radius);
            display: grid;
            place-items: center;
            position: absolute;
            bottom: 1.5rem;
            right: 2rem;
            background-color: var(--color-primary-1);
            color: var(--color-white-1);
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 14px;
          }
        }

        &:first-child {
          width: 100%;
          display: grid;
          grid-template-columns: 20rem 1fr;
          grid-template-rows: 1fr;
          .background {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
          }
          .text {
            position: relative;
            .title {
              h3 {
                font-size: 20px;
                color: var(--color-primary-1);
              }
              span {
                font-size: 30px;
              }
            }
            p {
              font-size: 16px;
              color: var(--color-black-1);
            }
          }
        }
      }
    }
  }
</style>
