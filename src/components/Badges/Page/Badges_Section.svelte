<script>
  import BadgesCard from './Badges_Cards.svelte';
  export let comunidades;
</script>

<section>
  <h2>Insignias</h2>
  <div id="container" class="w-4/5 mx-auto">
    <div class="flex flex-col sm:flex-row">
      <!-- Card 1 -->
      <div class="cards">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {#each comunidades as logros}
            <div
              class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"
            >
              <BadgesCard {logros} />
            </div>
          {/each}
        </div>
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

    .cards {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      max-width: 85%;
      justify-content: center;
    }
  }
</style>
