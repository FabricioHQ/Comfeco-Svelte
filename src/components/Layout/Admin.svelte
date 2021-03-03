<script>
  // components for this layout
  import AdminNavbar from '../Nav/Admin/AdminNavbar.svelte';
  import Sidebar from '../Sidebar/Sidebar.svelte';
  import Dashboard from '../dashboard/dashboard.svelte';

  export let location;
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 bg-gray-200">
    <AdminNavbar />

    <Dashboard />
  </div>
</div>
