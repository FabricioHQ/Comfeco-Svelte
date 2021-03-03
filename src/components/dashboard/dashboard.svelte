<div>
  <div class="flex h-screen bg-purple-100 dark:bg-gray-800 font-roboto">
    <!-- <Sidebar /> -->

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center p-6">
        <div class="flex items-center space-x-4 lg:space-x-0">
          <div>
            <h1 class="text-2xl font-medium text-gray-800 dark:text-white">
              Welcome a COMFECO 2021 !
              <!-- {#if $currentUser}{ $currentUser.displayName || $currentUser.email }{/if}!  -->
            </h1>
          </div>
        </div>

        <div class="flex items-center space-x-4" />
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
          <div
            class="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed"
          >
            Content Aqui se pondria todo lo que vamos a mostrarle al usuario una
            vez que este logeado
          </div>
        </div>
      </main>
    </div>
  </div>
</div>

<style>
</style>
