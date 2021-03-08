<script lang="ts">
  import { counter } from '../contador';
  $: seconds = '';
  $: minutes = '';
  $: hours = '';
  $: days = 0;

  const timerUpdate = setInterval(() => {
    let time = counter('Mar 20 2021 12:00:00');
    seconds = time.seconds;
    minutes = time.minutes;
    hours = time.hours;
    days = time.days;
  }, 1000);
</script>

<div class="counter">
  <p class="title">Próximo evento en:</p>
  <div class="date">
    <div class="time">
      <span class="subtitle">Días</span>
      <span class="interval">{days}</span>
    </div>
    <div class="time">
      <span class="subtitle">Horas</span>
      <span class="interval">{hours}</span>
    </div>
    <div class="time">
      <span class="subtitle">Minutos</span>
      <span class="interval">{minutes}</span>
    </div>
    <div class="time">
      <span class="subtitle">Segundos</span>
      <span class="interval">{seconds}</span>
    </div>
  </div>
</div>

<style lang="scss">
  .counter {
    padding: 1rem 2rem;
    position: fixed;
    top: calc(5rem + 1.5rem);
    right: 3rem;
    background-color: rgba($color: #000000, $alpha: 0.75);
    z-index: 1000;
    border-radius: var(--border-radius);
    p.title {
      font-family: var(--font-title);
      font-weight: 500;
      font-size: 18px;
      color: var(--color-white-1);
    }
    .date {
      display: flex;
      margin-top: 0.5rem;
      .time {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 1rem;
        .subtitle {
          font-family: var(--font-title);
          font-weight: 400;
          font-size: 14px;
          color: var(--color-white-1);
          margin-bottom: 0.125rem;
        }
        .interval {
          font-family: var(--font-title);
          font-weight: 400;
          font-size: 20px;
          color: var(--color-white-1);
        }
      }
    }
  }
</style>
