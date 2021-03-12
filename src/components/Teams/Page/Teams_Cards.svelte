<script>
  export let team;
</script>

<!-- component -->
<!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"> -->

<!-- <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"> -->
<div
  class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
>
  <img src={team.img} alt="" class="h-full w-full" />
</div>

<h2 class="mt-4 font-bold text-xl text-center">{team.name}</h2>
<h6 class="mt-2 text-sm font-medium">Founder</h6>
