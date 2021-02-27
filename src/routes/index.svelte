<script lang="ts">
  import LayoutBase from '../components/Layout/Layout_Base.svelte';

  let page: string = 'home';
</script>

<svelte:head>
  <title>Comfeco</title>
</svelte:head>

<LayoutBase {page}>
  <div class="home">
    <h1 class="text-primary font-slab">Comfeco - Home</h1>
  </div>
</LayoutBase>

<!-- <style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    h1 {
      font-family: var(--font-title);
      font-weight: medium;
      font-size: 48px;
      color: var(--color-black-1);
    }
  }
</style> -->
