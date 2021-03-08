<section>
  <h2>Talleres próximos</h2>
  <div class="cards">
    <div class="taller">
      <div class="cover">
        <img
          src="/images/workshop/workshop_taller_machine_learning.jpg"
          alt="taller de machine learning"
        />
        <div class="fecha">
          <div class="show">
            <span class="date">23 sep</span>
            <span class="participantes">1658 participantes</span>
          </div>
          <div class="info">
            <p>16:00 hrs - PER, COL, PAN, ECU</p>
            <p>17:00 hrs - VEN, BOL, BRA</p>
            <p>18:00 hrs - CHI, ARG</p>
          </div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">Mi primera red neuronal</h3>
        <p class="description">
          Participa en este primer evento de machine learning. Desarrolla una
          red neuronal que aprenda a diferencia las malas palabras de un texto.
        </p>
        <button>Participa</button>
      </div>
    </div>
    <div class="taller">
      <div class="cover">
        <img
          src="/images/workshop/workshop_taller_machine_learning.jpg"
          alt="taller de machine learning"
        />
        <div class="fecha">
          <div class="show">
            <span class="date">23 sep</span>
            <span class="participantes">1658 participantes</span>
          </div>
          <div class="info">
            <p>16:00 hrs - PER, COL, PAN, ECU</p>
            <p>17:00 hrs - VEN, BOL, BRA</p>
            <p>18:00 hrs - CHI, ARG</p>
          </div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">Mi primera red neuronal</h3>
        <p class="description">
          Participa en este primer evento de machine learning. Desarrolla una
          red neuronal que aprenda a diferencia las malas palabras de un texto.
        </p>
        <button>Participa</button>
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
      margin-top: 2rem;
      font-family: var(--font-title);
      font-size: 32px;
      font-weight: 500;
      color: var(--color-primary-1);
    }
    .cards {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      max-width: 1000px;
      justify-content: center;
      .taller {
        width: 100%;
        height: 400px;
        background-color: var(--color-white-1);
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 3rem;
        border-radius: var(--border-radius);
        .cover {
          position: relative;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: center;
            border-radius: var(--border-radius) 0 0 var(--border-radius);
          }
          .fecha {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4rem;
            box-sizing: border-box;
            background-color: rgba($color: #000000, $alpha: 0.5);
            border-radius: var(--border-radius) 0 0 var(--border-radius);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 2.5rem;
            transition: 0.5s ease-out;
            .show {
              display: flex;
              align-items: center;
              justify-content: space-between;
              span.date {
                font-family: var(--font-title);
                font-weight: 500;
                font-size: 28px;
                color: rgba($color: #fff, $alpha: 0.75);
              }
              span.participantes {
                font-family: var(--font-title);
                font-weight: 400;
                font-size: 16px;
                color: rgba($color: #fff, $alpha: 0.75);
              }
            }
            .info {
              display: none;
            }
          }
          &:hover {
            .fecha {
              height: 100%;
              justify-content: flex-start;
              padding: 2.5rem;
              .show {
                margin-bottom: 1rem;
              }
              .info {
                display: block;
                p {
                  font-family: var(--font-title);
                  font-weight: 400;
                  font-size: 14px;
                  color: rgba($color: #fff, $alpha: 0.75);
                  margin-bottom: 0.5rem;
                }
              }
            }
          }
        }
        .content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          .title {
            font-family: var(--font-title);
            font-weight: 500;
            font-size: 24px;
            color: var(--color-primary-1);
            margin-bottom: 0.75rem;
          }
          .description {
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 17px;
            color: var(--color-black-1);
          }
          button {
            position: absolute;
            bottom: 2.5rem;
            left: 2.5rem;
            height: 36px;
            padding: 0 2.25rem;
            border-radius: var(--border-radius);
            background-color: var(--color-primary-1);
            font-family: var(--font-title);
            font-weight: 400;
            font-size: 14px;
            color: var(--color-white-1);
            align-self: flex-start;
            display: grid;
            place-items: center;
          }
        }
      }
    }
  }
</style>
