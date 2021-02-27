<script>
  import IconSocial from '../../Utils/Icons/Icon_Social.svelte';

  export let comunidad;
</script>

<div class="card">
  <div class="socials">
    {#each comunidad.socials as social}
      <a href={social.url} target="_blank">
        <IconSocial social={social.name} size={20} color={'#777879'} />
      </a>
    {/each}
  </div>
  <div class="info">
    <img src={comunidad.img} alt={comunidad.name} />
    <p>
      {comunidad.name}
    </p>
    <a href={comunidad.url} class="unirse" target="_blank">Unirse</a>
  </div>
</div>

<style lang="scss">
  .card {
    width: 320px;
    height: 320px;
    margin: 0 1.5rem;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 2px 0.5px rgba(0, 0, 0, 0.15);
    margin-bottom: 3rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .socials {
      position: absolute;
      top: 1rem;
      a {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 10px;

        img {
          border: none;
          outline: none;
        }
      }
    }
    .info {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 96px 54px 32px;
      place-items: center;
      row-gap: 0.75rem;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: none;
      }

      p {
        width: 180px;
        font-family: var(--font-title);
        text-align: center;
        font-size: 18px;
        font-weight: 500;
      }

      a {
        height: 32px;
        display: inline-grid;
        place-items: center;
        padding: 0 1.75rem;
        border-radius: var(--border-radius);
        background-color: var(--color-primary-1);
        font-family: var(--font-title);
        font-size: 14px;
        color: var(--color-white-1);
      }
    }
  }
</style>
