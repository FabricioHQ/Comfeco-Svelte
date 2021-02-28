<script>
  import CommunityCardPage from './Community_Card/Community_Card_Page.svelte';
  export let comunidades;
</script>

<section>
  <h2>Comunidades</h2>
  <div class="cards_page_comunidades">
    {#each comunidades as comunidad}
      <CommunityCardPage {comunidad} />
    {/each}
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
      margin-top: 5rem;
      font-family: var(--font-title);
      font-size: 32px;
      font-weight: 500;
      color: var(--color-primary-1);
    }
    .cards_page_comunidades {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      max-width: 85%;
      justify-content: center;
    }
  }
</style>
