<script lang="ts">
  import CommunityBanner from '../../components/Community/Community_Banner.svelte';
  import CommunitySection from '../../components/Community/Community_Section.svelte';
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';
  let page: string = 'community';

  let comunidades = [
    {
      name: 'Comunidad de Programadores',
      img: '/images/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
      ],
    },
    {
      name: 'Comunidad de Programadores 2',
      img: '/images/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
      ],
    },
    {
      name: 'CodelyTV',
      img: '/images/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
      ],
    },
    {
      name: 'Comunidad de Programadores 2',
      img: '/images/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
      ],
    },
    {
      name: 'Comunidad de Programadores 2',
      img: '/images/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Comunidad</title>
</svelte:head>

<LayoutBase {page}>
  <CommunityBanner />
  <CommunitySection {comunidades} />
</LayoutBase>

<style>
</style>
