<section class="component">
  <h2>Proyectos desctacados</h2>
  <div class="destacados">
    <div class="destacado">
      <img src="/images/home/home-banner.jpg" alt="proyecto" />
      <div class="text">
        <h3>Team React 12</h3>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
      </div>
      <button>View web</button>
    </div>
    <div class="destacado">
      <img src="/images/home/home-description-desarrollar.jpg" alt="proyecto" />
      <div class="text">
        <h3>Team React 12</h3>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
      </div>
      <button>View web</button>
    </div>
    <div class="destacado">
      <img src="/images/home/home-description-conocer.jpg" alt="proyecto" />
      <div class="text">
        <h3>Team React 12</h3>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
      </div>
      <button>View web</button>
    </div>
    <div class="destacado">
      <img src="/images/projects/projects_banner.jpg" alt="proyecto" />
      <div class="text">
        <h3>Team React 12</h3>
        <p>
          Unos comentarios de los jueces nunca están de más y mejor si señalan
          lo mejor del proyecto y el motivo de ser seleccionado como ganador.
        </p>
      </div>
      <button>View web</button>
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
      margin-top: 3rem;
      font-family: var(--font-title);
      font-size: 32px;
      font-weight: 500;
      color: var(--color-primary-1);
    }
    .destacados {
      width: 85%;
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .destacado {
        width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-white-1);
        border-radius: var(--border-radius);
        margin: 0 1.5rem 3rem 1.5rem;
        img {
          width: 100%;
          height: calc((20rem / 16) * 9);
          object-fit: cover;
          object-position: center;
          border-radius: var(--border-radius);
        }
        .text {
          width: calc(100% - 2rem);
          h3 {
            margin-top: 1rem;
            font-family: var(--font-title);
            font-weight: 500;
            font-size: 17px;
            color: var(--color-primary-1);
          }
          p {
            margin-top: 0.5rem;
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 15px;
            color: var(--color-black-1);
          }
        }
        button {
          margin: 2rem 1rem;
          align-self: flex-start;
          height: 28px;
          padding: 0 1rem;
          background-color: var(--color-primary-1);
          color: var(--color-white-1);
          border-radius: var(--border-radius);
          font-family: var(--font-title);
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }
</style>
