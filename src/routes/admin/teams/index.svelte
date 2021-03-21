<script lang="ts">
  import LayoutBase from '../../../components/Layout/Admin.svelte';
  import TeamSection from '../../../components/Teams/Page/Teams_Section.svelte';

  import { user } from '../../../stores/current_user.js';

  export async function preload(page, session) {
    let { user } = session;
    // if (!user) {
    //   return this.redirect(302, '/signin');
    // }
  }

  let page: string = 'teams';

  let teamCommunity = [
    {
      name: 'Community of Svelte',
      img: '/images/teams/svelte.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      team: [
        {
          name: 'Team-Svelte #1',
          participantes: 5,
          project: 'Back End',
          status: 'completed',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 100,
          url: 'https://www.facebook.com/groups/2637132626546045',
          teampeople: [
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
          ],
        },
        {
          name: 'Team-Svelte #2',
          participantes: 5,
          project: 'Front End',
          status: 'on schedule',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 90,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
        {
          name: 'Team-Svelte #3',
          participantes: 3,
          project: 'Front End',
          status: 'pending',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 73,
          url: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew',
        },
        {
          name: 'Team-Svelte #4',
          participantes: 5,
          project: 'Back End',
          status: 'inactive',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 73,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
      ],
    },
    {
      name: 'Community of Vue',
      img: '/images/teams/vue.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      team: [
        {
          name: 'Team-Vue #1',
          participantes: 5,
          project: 'Back End',
          status: 'completed',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 100,
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'Team-Vue #2',
          participantes: 5,
          project: 'Back End',
          status: 'pending',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 63,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
        {
          name: 'Team-Vue #3',
          participantes: 5,
          project: 'Back End',
          status: 'on schedule',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 82,
          url: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew',
        },
        {
          name: 'Team-Vue #4',
          participantes: 5,
          project: 'Front End',
          status: 'inactive',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 73,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
      ],
    },
    {
      name: 'Community of Angular',
      img: '/images/teams/angular.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      team: [
        {
          name: 'Team-Angular #1',
          participantes: 5,
          project: 'Back End',
          status: 'completed',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 100,
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'Team-Angular #2',
          participantes: 5,
          project: 'Back End',
          status: 'pending',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 63,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
        {
          name: 'Team-Angular #3',
          participantes: 5,
          project: 'Back End',
          status: 'on schedule',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 82,
          url: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew',
        },
        {
          name: 'Team-Angular #4',
          participantes: 5,
          project: 'Front End',
          status: 'inactive',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 73,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
      ],
    },
    {
      name: 'Community of React',
      img: '/images/teams/react.png',
      url: 'https://discord.com/invite/5Bb5yvzNPr',
      team: [
        {
          name: 'Team-React #1',
          participantes: 5,
          project: 'Back End',
          status: 'completed',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 100,
          url: 'https://www.facebook.com/groups/2637132626546045',
        },
        {
          name: 'Team-React #2',
          participantes: 5,
          project: 'Back End',
          status: 'pending',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 63,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
        {
          name: 'Team-React #3',
          participantes: 5,
          project: 'Back End',
          status: 'on schedule',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 82,
          url: 'https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew',
        },
        {
          name: 'Team-React #4',
          participantes: 5,
          project: 'Front End',
          status: 'inactive',
          img1: '/images/teams/angular.png',
          img2: '/images/teams/react.png',
          img3: '/images/teams/vue.png',
          img4: '/images/teams/angular.png',
          img5: '/images/teams/angular.png',
          nivel: 73,
          url: 'https://discord.com/invite/5Bb5yvzNPr',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Teams</title>
</svelte:head>

<LayoutBase {page}>
  <!-- <h1>Welcome {$user.email || $user.displayName }</h1> -->

  <!-- <h1>Teams</h1> -->
  <TeamSection {teamCommunity} />
</LayoutBase>

<style>
</style>
