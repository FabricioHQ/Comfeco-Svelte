<script lang="ts">
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';
  import ProjectBanner from '../../components/Project/Project_Banner.svelte';
  import ProjectSectionDesctacados from '../../components/Project/Project_Section_Desctacados.svelte';
  import ProjectSectionGanadores from '../../components/Project/Project_Section_Ganadores.svelte';
  let page: string = 'projects';
</script>

<svelte:head>
  <title>Proyectos</title>
</svelte:head>

<LayoutBase {page}>
  <ProjectBanner />
  <ProjectSectionGanadores />
  <ProjectSectionDesctacados />
</LayoutBase>

<style>
</style>
