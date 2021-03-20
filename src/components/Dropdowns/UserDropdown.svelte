<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  // export let user;

  let show = false; // menu state
  let menu = null; // menu wrapper DOM reference

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (show && !menu.contains(event.target)) {
        show = false;
      }
    };

    const handleEscape = (event) => {
      if (show && event.key === 'Escape') {
        show = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('keyup', handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      document.removeEventListener('keyup', handleEscape, false);
    };
  });
</script>

<div class="ml-3 relative" bind:this={menu}>
  <div class="ml-4 flex items-center md:ml-6">
    <button
      class="bg-purple-600 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-500"
    >
      <span class="sr-only">View notifications</span>
      <!-- Heroicon name: outline/bell -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </button>
    <div class="ml-3 relative">
      <div>
        <button
          on:click={() => (show = !show)}
          class="max-w-xs bg-purple-600 rounded-full flex items-center text-sm
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-500"
          id="user-menu"
          aria-haspopup="true"
        >
          <span class="sr-only">Open user menu</span>
          <img
            src="/images/comfeco2.png"
            alt="user-imagen"
            class="h-8 w-8 shadow rounded-full max-w-full h-auto align-middle border-none "
          />
        </button>
      </div>
      {#if show}
        <div
          in:scale={{ duration: 100, start: 0.95 }}
          out:scale={{ duration: 75, start: 0.95 }}
          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <!-- <div in:scale={{ duration: 100, start: 0.95 }} out:scale={{ duration: 75, start: 0.95 }} class="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-800
                                              rounded shadow-md"> -->
          <!-- <a href="/signin" class="block px-4 py-2 hover:bg-green-500 hover:text-green-100">Sign out</a> -->
          <a
            href="/profile"
            class="block px-4 py-2 hover:bg-purple-600 hover:text-white"
            role="menuitem">You Profile</a
          >
          <a
            href="/profile"
            class="block px-4 py-2 hover:bg-purple-600 hover:text-white"
            role="menuitem">Settings</a
          >
          <a
            href="auth/signin"
            class="block px-4 py-2 hover:bg-purple-600 hover:text-white"
            role="menuitem">Sign out</a
          >
        </div>
      {/if}
    </div>
  </div>
</div>
