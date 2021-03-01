<script>
  import Calendar from '../Utils/Icons/Calendar.svelte';
  import Community from '../Utils/Icons/Community.svelte';
  import Star from '../Utils/Icons/Star.svelte';
</script>

<section>
  <h2>Unámonos</h2>
  <div class="unete">
    <div class="text">
      <p>
        Comfeco es una comunidad que busca que sus usuarios se desenvuelvan
        fácilmente con los retos y eventos que les proponemos.
      </p>
      <p>
        Ya hemos llegado a acuerdos de colaboración con distintas comunidades y
        eventos: Huawei Latam, Comunidad de programadores, CodelyTV, etc.
        ¡Súmate a la comunidad!
      </p>
    </div>
    <div class="card">
      <div class="paragraph">
        <Calendar size={32} color={'#8A178C'} />
        <p>
          Una serie de eventos donde los participantes demuestran sus
          habilidades en diferentes competencias: Frontend, Backend, Game
          DEvelop, Machine Learning, UI & UX y más.
        </p>
      </div>
      <div class="paragraph">
        <Star size={32} color={'#8A178C'} />
        <p>
          Constantemente se irá calificando las habilidades y competencias de
          los usuarios en interesantes retos semanales que le harán
          desenvolverse mejor cada vez.
        </p>
      </div>
      <div class="paragraph">
        <Community size={32} color={'#8A178C'} />
        <p>
          Estamos en comunidad, entre todos nos ayudamos a mejorar nuestra
          habilidades y apoyarnos en nuestras debilidades para ser mejores cada
          día.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
    background-color: #edf2f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 2rem 0 3rem 0;
      font-family: var(--font-title);
      font-size: 32px;
      font-weight: 500;
      color: var(--color-primary-1);
    }
    .unete {
      display: flex;
      width: 90%;
      max-width: 880px;
      justify-content: space-between;
      margin-bottom: 5rem;

      .text {
        width: calc(50% - 1.5rem);

        p {
          font-family: var(--font-title);
          font-weight: 400;
          font-size: 18px;
          color: var(--color-black-1);
          margin-bottom: 2rem;
        }
      }

      .card {
        width: calc(50% - 1.5rem);
        padding: 4rem 3rem;
        background-color: var(--color-white-1);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow) var(--color-gray-1);

        .paragraph {
          display: grid;
          grid-template-columns: 2rem 1fr;
          grid-row: 1fr;
          column-gap: 2rem;
          margin-bottom: 3.375rem;

          &:last-child {
            margin: 0;
          }

          p {
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 15px;
            color: var(--color-black-1);
          }
        }
      }
    }
  }
</style>
