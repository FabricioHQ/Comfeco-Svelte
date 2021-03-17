<script>
  // core components
  import SettingsProfileCard from './SettingsProfile_Cards.svelte';
  import ProfileCard from './Profile_Cards.svelte';
  // export let location;
</script>

<section>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4">
      <SettingsProfileCard />
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <ProfileCard />
    </div>
  </div>
</section>
