<script>
  import Discord from './Discord.svelte';
  import Facebook from './Facebook.svelte';
  import Instagram from './Instagram.svelte';
  import Youtube from './Youtube.svelte';

  export let social;
  export let size;
  export let color;
</script>

{#if social === 'instagram'}
  <Instagram {size} {color} />
{/if}
{#if social === 'discord'}
  <Discord {size} {color} />
{/if}
{#if social === 'facebook'}
  <Facebook {size} {color} />
{/if}
{#if social === 'youtube'}
  <Youtube {size} {color} />
{/if}

<style>
</style>
