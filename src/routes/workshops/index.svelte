<script lang="ts">
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';
  import WorkshopBanner from '../../components/Workshop/Workshop_Banner.svelte';
  import WorkshopTalleresCercanos from '../../components/Workshop/Workshop_TalleresCercanos.svelte';
  let page: string = 'workshops';
</script>

<svelte:head>
  <title>Talleres</title>
</svelte:head>

<LayoutBase {page}>
  <WorkshopBanner />
  <WorkshopTalleresCercanos />
</LayoutBase>

<style>
</style>
