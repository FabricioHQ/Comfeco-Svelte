<script lang="ts">
  import LayoutBase from '../../../components/Layout/Admin.svelte';

  import ProfileSection from '../../../components/Profile/Page/Profile_Section.svelte';

  // export let color = "light";
  let page: string = 'teams';

  let profiles = [
    {
      name: 'Erick Marcia',
      img: '/images/theTeam/fotoErick.png',
      background: '/images/theTeam/Fondo.png',
      comment:
        'Web and mobile developer in constant learning, main project my family (modeling Jesus Christ is our family), I love challenges and new experiences.',
      email: 'erickmarcia14@gmail.com',
      city: ' Granada, Nicaragua',
      job: 'Analista Programador',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
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
      name: 'Rogelio Samuel',
      img:
        'https://avatars.githubusercontent.com/u/63329638?s=400&u=e575ee248575ecad83c650d081ca2a30fa13acf6&v=4',
      background: '/images/theTeam/Fondo.png',
      comment:
        'Web developer, intern at EDteam, MERN stack. Always learning and open to working with other people.',
      email: 'rogeliosamuel621@gmail.com',
      url: 'https://rogeliosamuel621.netlify.app/',
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
      name: 'FabricioHQ',
      img:
        'https://avatars.githubusercontent.com/u/71950969?s=400&u=1cfb67c0886e6d889255fcc896e08536c33c55a5&v=4',
      background: '/images/theTeam/Fondo.png',
      comment: 'Hola me',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
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
      name: 'Julian Rojas',
      img: '/images/teams/svelte.png',
      background: '/images/theTeam/Fondo.png',
      comment: 'Hola me',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
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
  ];
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<LayoutBase {page}>
  <!-- <h1>Teams</h1> -->
  <ProfileSection {profiles} />
</LayoutBase>

<style>
</style>
