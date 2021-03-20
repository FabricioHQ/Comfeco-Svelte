<script>
  import TableDropdown from '../../../components/Dropdowns/TableDropdown.svelte';
  import LayoutBase from '../../../components/Layout/Admin.svelte';
  import Modal from '../../../components/Utils/Modal/Modal.svelte';

  // import TeamSection from '../../../components/Teams/Component/Teams_Section.svelte';

  export let color = 'light';
  export let teamsx;

  export let page;
  let items = {
    home: page === 'home' ? true : false,
    teams: page === 'teams' ? true : false,
    team: page === 'team' ? true : false,
  };

  let showPage = false;
  let showModal = false;
</script>

<!-- component -->
<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <span class="flex items-center justify-left text-lg text-purple-900">
          <img
            src={teamsx.img}
            class="h-12 w-12 bg-white rounded-full border"
            alt="..."
          />
          <h3
            class="font-semibold text-lg {color === 'light'
              ? 'text-gray-800'
              : 'text-white'}"
          >
            {teamsx.name}
          </h3>
        </span>
      </div>
    </div>
  </div>
  <div class="table-auto">
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Teams
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Project
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Options
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Status
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Users
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Completion
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left {color ===
            'light'
              ? 'bg-gray-100 text-gray-600 border-gray-200'
              : 'bg-red-700 text-red-200 border-red-600'}"
          />
        </tr>
      </thead>
      <tbody>
        {#each teamsx.team as team}
          <tr>
            <th class="px-6 align-middle text-xs text-left flex items-center">
              <img
                src={teamsx.img}
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold {color === 'light'
                  ? 'btext-gray-700'
                  : 'text-whit'}"
              >
                {team.name}
              </span>
            </th>
            <td class="font-bold px-6 align-middle text-xs ">
              {team.project}
            </td>
            <td class="font-bold px-6 align-middle text-xs ">
              <!-- <div class="info"> -->
              <!-- <a href="/admin/teams/team" class:active={items.team} class="unirse">Unirse</a> -->
              <button on:click={() => (showModal = true)}> Unirse </button>
            </td>
            <td class="px-8 align-middle text-xs ">
              <div class="flex items-center">
                <div class="status {team.status}" />
                <span class="ml-2 font-bold">{team.status}</span>
              </div>
            </td>
            <td class="align-middle text-xs ">
              <div class="flex">
                <img
                  src={team.img1}
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                />
                <img
                  src={team.img2}
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                />
                <img
                  src={team.img3}
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                />
                <img
                  src={team.img4}
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                />
              </div>
            </td>
            <td class="px-6 align-middle text-xs ">
              <div class="flex items-center">
                <span class="mr-2">{team.nivel}%</span>
                <div class="relative w-full">
                  {#if team.status == 'completed'}
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-green-200"
                    >
                      <div
                        style="width: {team.nivel}%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      />
                    </div>
                  {:else if team.status == 'on schedule'}
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: {team.nivel}%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400"
                      />
                    </div>
                  {:else if team.status == 'pending'}
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-yellow-200"
                    >
                      <div
                        style="width: {team.nivel}%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      />
                    </div>
                  {:else}
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: {team.nivel}%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      />
                    </div>
                  {/if}
                </div>
              </div>
            </td>
            <td class="px-6 align-middle text-xs p-4 text-right">
              <TableDropdown {team} {page} />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">
      modal
      <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
    </h2>

    <ol class="definition-list">
      <li>of or relating to modality in logic</li>
      <li>
        containing provisions as to the mode of procedure or the manner of
        taking effect —used of a contract or legacy
      </li>
      <li>of or relating to a musical mode</li>
      <li>of or relating to structure as opposed to substance</li>
      <li>
        of, relating to, or constituting a grammatical form or category
        characteristically indicating predication
      </li>
      <li>of or relating to a statistical mode</li>
    </ol>
  </Modal>
{/if}

<style>
  .status {
    background: #60a5fa;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    position: relative;
  }

  .status.inactive {
    background: #ef4444;
  }

  .status.completed {
    background: #10b981;
  }

  .status.pending {
    background: #f59e0b;
  }

  .status.undefined {
    background: #ef4444;
  }

  a {
    height: 32px;
    display: inline-grid;
    place-items: center;
    padding: 0 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--color-primary-1);
    font-family: var(--font-title);
    font-size: 14px;
    color: var(--color-white-1);
  }
</style>
