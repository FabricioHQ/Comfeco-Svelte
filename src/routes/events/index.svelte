<script>
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';
  import Event from './Event.svelte';
  let page = 'events';
  import { events } from './events';
</script>

<svelte:head>
  <title>Eventos</title>
</svelte:head>

<LayoutBase {page}>
  <h1>Eventos activos</h1>
  <main>
    {#each events as event}
      <Event
        moreInformationUrl={event.moreInfo}
        description={event.description}
      />
    {/each}
  </main>
</LayoutBase>

<style>
  h1 {
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
  }
  main {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    margin: 50px 10px;
  }
</style>
