<script lang="ts">
  import HomeBanner from '../components/Home/Home_Banner.svelte';
  import CommunitySectionComponent from '../components/Community/Component/Community_Section.svelte';
  // import CommunityUnete from '../components/Community/Community_Unete.svelte';
  import LayoutBase from '../components/Layout/Layout_Base.svelte';
  // import LayoutBase from '../components/Layout/Layout_Base.svelte';
  let page: string = 'home';

  let comunidades = [
    {
      name: 'Comunidad de Programadores',
      users: 3775,
      img: '/images/community/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
    },
    {
      name: 'CodelyTV',
      users: 75026,
      img: '/images/community/codelytv.png',
      url: 'https://codely.tv/',
    },
    {
      name: 'CódigoFacilito',
      users: 69108,
      img: '/images/community/codigo_facilito.png',
      url: 'https://codigofacilito.com/',
    },
  ];
</script>

<svelte:head>
  <title>Comfeco</title>
</svelte:head>

<LayoutBase {page}>
  <HomeBanner />
  <CommunitySectionComponent {comunidades} />
  <!-- <CommunityUnete /> -->
</LayoutBase>

<style>
</style>
