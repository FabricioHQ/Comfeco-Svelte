<script lang="ts">
  // import CommunityCard from './Community_Card.svelte';
  export let badges;
</script>

<section class="component">
  <h2>Nuestras Comunidades</h2>
  <div class="card">
    <div class="title">
      <p>Los más grandes</p>
      <a href="/community">View all</a>
    </div>
    <div class="commnity_recomend">
      {#each badges as comunidad}
        <!-- <CommunityCard {comunidad} /> -->
      {/each}
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

    .card {
      width: 90%;
      max-width: 640px;
      padding: 2rem 3rem;
      margin-top: 3rem;
      background-color: var(--color-white-1);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow) var(--color-gray-1);

      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        p {
          font-family: var(--font-title);
          font-weight: 500;
          font-size: 20px;
          color: var(--color-black-1);
        }

        a {
          font-family: var(--font-title);
          font-weight: 500;
          font-size: 16px;
          color: var(--color-primary-1);
        }
      }
    }
  }
</style>
