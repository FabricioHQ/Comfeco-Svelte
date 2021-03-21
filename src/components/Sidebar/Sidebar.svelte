<script lang="ts">
  import Logo from '../Utils/Icons/Logo.svelte';

  // core components
  // import NotificationDropdown from "components/Dropdowns/NotificationDropdown.svelte";
  // import UserDropdown from "components/Dropdowns/UserDropdown.svelte";

  let collapseShow = 'hidden';

  function toggleCollapseShow(classes) {
    collapseShow = classes;
  }

  export let page;
  let items = {
    home: page === 'home' ? true : false,
    badges: page === 'badges' ? true : false,
    teams: page === 'teams' ? true : false,
    ourTeam: page === 'ourTeam' ? true : false,
    profile: page === 'profile' ? true : false,
    settings: page === 'settings' ? true : false,
    workshops: page === 'workshops' ? true : false,
    projects: page === 'projects' ? true : false,
  };

  // const handleClick = () => {
  //   console.log(page);
  // };
  // console.log(page);
</script>

<nav
  class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
  <div
    class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  >
    <!-- Toggler -->
    <button
      class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      on:click={() => toggleCollapseShow('bg-white m-2 py-3 px-6')}
    >
      <i class="fas fa-bars" />
    </button>
    <!-- Brand -->
    <div class="sidenav-header d-flex align-items-center">
      <a href="." class="navbar-brand">
        <Logo size={48} />
      </a>
      <div class="ml-auto">
        <div
          class="sidenav-toggler d-none
                        d-xl-block active"
        >
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line" />
            <i class="sidenav-toggler-line" />
            <i class="sidenav-toggler-line" />
          </div>
        </div>
      </div>
    </div>
    <!-- User -->
    <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <!-- <NotificationDropdown /> -->
      </li>
      <li class="inline-block relative">
        <!-- <UserDropdown /> -->
      </li>
    </ul>
    <!-- Collapse -->
    <div
      class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
    >
      <!-- Collapse header -->
      <div
        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
      >
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <!-- <a use:link
              class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
              href=".">
              COMFECO
            </a> -->
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              on:click={() => toggleCollapseShow('hidden')}
            >
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
      <!-- Form -->
      <form class="mt-6 mb-4 md:hidden">
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Projects
      </h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none">
        <!-- Opciones -->
        <li class="my-px">
          <a
            href="."
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-purple-900"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span class="ml-3">Teams </span>
            <span
              class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto"
              >3</span
            >
          </a>
        </li>
        <li class="my-px">
          <a
            href="/admin/badges"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-purple-900"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span class="ml-3">Badges</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="/admin/teams"
            class:active={items.teams}
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span class="ml-3">Teams</span>
            <span
              class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto"
              >1k</span
            >
          </a>
        </li>
        <!-- <li class="my-px">
          <a href="." class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400">
            <span class="flex items-center justify-center text-lg text-green-400">
              <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                stroke="currentColor" class="h-6 w-6">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span class="ml-3">Add new</span>
          </a>
        </li> -->
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Account
      </h6>
      <!-- Navigation -->
      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="my-px">
          <a
            href="/admin/profile"
            class:active={items.profile}
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Profile</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="/admin/badges"
            class:active={items.badges}
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </span>
            <span class="ml-3">Notifications</span>
            <span
              class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto"
              >10</span
            >
          </a>
        </li>
        <li class="my-px">
          <a
            href="/admin/settings"
            class:active={items.settings}
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span class="ml-3">Settings</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="/admin/ourTeam"
            class:active={items.ourTeam}
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span class="ml-3">Our Team</span>
            <!-- <span
              class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto"
              >1k</span
            > -->
          </a>
        </li>
        <li class="my-px">
          <a
            href="/auth/signin"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span class="flex items-center justify-center text-lg text-red-400">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="ml-3">Logout</span>
          </a>
        </li>
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Teams COMFECO
      </h6>
      <!-- Navigation -->
      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="my-px">
          <a
            href="https://svelte.dev/"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Svelte</span>
            <!-- <span
              class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">30</span> -->
          </a>
        </li>
        <li class="my-px">
          <a
            href="https://reactjs.org/"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">React</span>
            <!-- <span
              class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">10</span> -->
          </a>
        </li>
        <li class="my-px">
          <a
            href="https://angularjs.org/"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Angular</span>
            <!-- <span
              class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">10</span> -->
          </a>
        </li>
        <li class="my-px">
          <a
            href="https://vuejs.org/"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-purple-400"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-500"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Vue</span>
            <!-- <span
              class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">10</span> -->
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
