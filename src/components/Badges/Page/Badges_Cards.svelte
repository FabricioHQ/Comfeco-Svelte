<script>
  // import IconSocial from '../../Utils/Icons/Icon_Social.svelte';

  export let logros;
</script>

<!-- component -->
<!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"> -->

<!-- <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"> -->
<div
  class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
>
  <img src={logros.img} alt="" class="h-full w-full" />
</div>

<h2 class="mt-4 font-bold text-xl text-center">{logros.name}</h2>
<h6 class="mt-2 text-sm font-medium">Founder</h6>

<!-- <p class="text-xs text-gray-500 text-center mt-3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
</p> -->
