<script>
  import Instagram from './Instagram.svelte';

  export let social;
  export let size;
  export let color;
</script>

{#if social === 'instagram'}
  <Instagram {size} {color} />
{/if}

<style>
</style>
