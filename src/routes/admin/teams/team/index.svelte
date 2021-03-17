<script lang="ts">
  import LayoutBase from '../../../../components/Layout/Admin.svelte';

  import TeamSection from '../../../../components/Teams/Component/Teams_Section.svelte';

  // export let color = "light";
  let page: string = 'team';
  export let teamCommunity;
</script>

<svelte:head>
  <title>Teams Svelte</title>
</svelte:head>

<LayoutBase {page}>
  <!-- <h1>Teams</h1> -->
  <TeamSection {teamCommunity} />
</LayoutBase>

<style>
</style>
