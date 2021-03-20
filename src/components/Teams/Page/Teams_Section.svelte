<script>
  import TeamsCard from './Teams_Cards.svelte';

  export let teamCommunity;
  export let color = 'light';
</script>

<section>
  <h2>Teams</h2>

  {#each teamCommunity as teamsx}
    <TeamsCard {teamsx} />
  {/each}
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
  }
</style>
