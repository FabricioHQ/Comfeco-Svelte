<script lang="ts">
  export let comunidad;
</script>

<div class="card">
  <img src={comunidad.img} alt={comunidad.name} />
  <div class="info">
    <p class="name">
      {comunidad.name}
    </p>
    <p class="users">
      {comunidad.users} miembros
    </p>
    <a href={comunidad.url} class="unirse" target="_blank">Unirse</a>
  </div>
</div>

<style lang="scss">
  @import '../../scss/responsive.scss';
  .card {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;

    @include responsive(640px) {
      align-items: center;
    }
    img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
    }
    .info {
      width: 100%;
      padding: 1rem 0;
      margin-left: 2rem;
      position: relative;
      p.name {
        font-family: var(--font-title);
        font-weight: 500;
        font-size: 20px;
        color: var(--color-black-1);
      }
      p.users {
        font-family: var(--font-title);
        font-weight: 400;
        font-size: 15px;
        color: var(--color-black-3);
      }
      a {
        position: absolute;
        right: 0;
        bottom: 1rem;
        display: inline-grid;
        padding: 0 1.75rem;
        height: 28px;
        border-radius: var(--border-radius);
        background-color: var(--color-primary-1);
        color: var(--color-white-1);
        place-items: center;
        font-family: var(--font-title);
        font-weight: 400;
        font-size: 14px;

        @include responsive(640px) {
          position: static;
          margin-top: 1rem;
        }
      }
    }
  }
</style>
