<script>
  import { fade } from 'svelte/transition';

  export let name = undefined;
  export let label = undefined;
  export let value = undefined;
  export let error = undefined;

  $: borderStyle = error
    ? 'border-red-500 ring-red-200 ring-2'
    : 'focus:border-purple-800 focus:ring-purple-200 focus:ring-2';
</script>

<div class="relative mb-4">
  <label for="full-name" class="leading-7 text-sm text-gray-600">
    {label}
  </label>
  <input
    {name}
    class="{borderStyle} w-full bg-white rounded-md border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    bind:value
    on:change
    on:blur
    {...$$restProps}
  />
  {#if error}
    <span
      transition:fade={{ duration: 200 }}
      class="text-xs text-red-400 absolute left-0"
    >
      {error}
    </span>
  {/if}
</div>

<style>
  span {
    bottom: -1.1rem;
  }
</style>
