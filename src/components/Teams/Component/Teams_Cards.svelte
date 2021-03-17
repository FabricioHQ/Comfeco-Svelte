<script>
  import IconSocial from '../../Utils/Icons/Icon_Social.svelte';
  // import TableDropdown from '../../../components/Dropdowns/TableDropdown.svelte';

  // export let color = 'light';
  export let team;
</script>

<!-- component -->
<div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
  <img src={team.background} class="w-full" />
  <div class="flex justify-center -mt-8">
    <img class="h-24 w-24 md rounded-full relative" src={team.img} alt="" />
  </div>
  <div class="text-center px-3 pb-6 pt-2">
    <h3 class="text-black text-sm bold font-sans">{team.name}</h3>
    <p class="mt-2 font-sans font-light text-grey-dark">{team.comment}</p>
  </div>
  <!-- <div class="socials">
    <ul class="flex flex-row mt-4 space-x-2">
      {#each team.socials as social}
      <a href={social.url} target="_blank">
          <IconSocial social={social.name} size={30} />
        </a>
      <li>
        <a href={social.url}
          class="flex items-center justify-center h-8 w-8 border rounded-full text-grey-dark border-grey-dark">
          <i class="fab fa-facebook"></i>
          <IconSocial social={social.name} size={20} />
        </a>
      </li>
      {/each}
    </ul>
  </div>
  <div class="flex justify-center pb-3 text-grey-dark">
    <div class="text-center mr-3 border-r pr-3">
      <h2>34</h2>
      <span>Photos</span>
    </div>
    <div class="text-center">
      <h2>42</h2>
      <span>Friends</span>
    </div>
  </div> -->
</div>
