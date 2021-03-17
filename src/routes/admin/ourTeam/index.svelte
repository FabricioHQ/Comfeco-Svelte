<script lang="ts">
  import LayoutBase from '../../../components/Layout/Admin.svelte';

  import TeamSection from '../../../components/Teams/Component/OurTeam_Section.svelte';

  // export let color = "light";
  let page: string = 'The Team';

  let ourTeam = [
    {
      name: 'Erick Marcia',
      img:
        'https://avatars.githubusercontent.com/u/4259125?s=460&u=acd0c8901239e826d4a7f8f5f33b1815430e85db&v=4',
      background:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg',
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
      background:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
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
      background:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg',
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
  <title>The Team</title>
</svelte:head>

<LayoutBase {page}>
  <!-- <h1>Teams</h1> -->
  <TeamSection {ourTeam} />
</LayoutBase>

<style>
</style>
