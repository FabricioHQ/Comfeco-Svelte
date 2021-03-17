<script>
  import ProfileCard from './Profile_Cards.svelte';

  export let profiles;
  export let color = 'light';
</script>

<section>
  <h2>Profile</h2>

  {#each profiles as profile}
    <ProfileCard {profile} />
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
