<script lang="ts">
  import HomeBanner from '../components/Home/Home_Banner.svelte';
  import CommunitySection from '../components/Community/Community_Section.svelte';
  // import CommunityUnete from '../components/Community/Community_Unete.svelte';
  import LayoutBase from '../components/Layout/Layout_Base.svelte';
  // import LayoutBase from '../components/Layout/Layout_Base.svelte';
  let page: string = 'home';

  let comunidades = [
    {
      name: 'Comunidad de Programadores',
      img: '/images/community/comunidad_de_programadores.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      socials: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'discord',
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew',
        },
      ],
    },
    {
      name: 'CodelyTV',
      img: '/images/community/codelytv.png',
      url: 'https://codely.tv/',
      socials: [
        {
          name: 'youtube',
          url:
            'https://www.youtube.com/CodelyTV?utm_source=home&utm_medium=landing&utm_campaign=internal&utm_content=header-menu',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/CodelyTV/',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/CodelyTV/',
        },
      ],
    },
    {
      name: 'CódigoFacilito',
      img: '/images/community/codigo_facilito.png',
      url: 'https://codigofacilito.com/',
      socials: [
        {
          name: 'youtube',
          url: 'https://www.youtube.com/user/codigofacilito',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/codigofacilito/',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/codigofacilito',
        },
      ],
    },
    {
      name: 'Huawei Developers',
      img: '/images/community/huawei.png',
      url: 'https://codigofacilito.com/',
      socials: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/Huaweidevs',
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/c/HuaweiDevelopers',
        },
      ],
    },
    {
      name: 'Tekki',
      img: '/images/community/tekki.png',
      url: 'https://tekki.tv/',
      socials: [],
    },
    {
      name: 'Domini Code',
      img: '/images/community/domini_code.png',
      url: 'https://dominicode.com/',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/dominicode.xyz/',
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A',
        },
      ],
    },
    {
      name: 'Stackly Code',
      img: '/images/community/stackly_code.png',
      url: 'https://stacklycode.com/',
      socials: [
        {
          name: 'discord',
          url: 'https://discord.com/invite/jjMRrHguPf',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/StacklyCodeOfficial',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Comunidad</title>
</svelte:head>

<LayoutBase {page}>
  <HomeBanner />
  <CommunitySection {comunidades} />
  <!-- <CommunityUnete /> -->
</LayoutBase>

<style>
</style>
