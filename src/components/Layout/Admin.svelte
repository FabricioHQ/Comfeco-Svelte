<script>
  // import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from '../Nav/Admin/AdminNavbar.svelte';
  import Sidebar from '../Sidebar/Sidebar.svelte';
  import Dashboard from '../Dashboard/dashboard.svelte';

  import Logros from '../Badges/Page/Badges_Section.svelte';

  // export let location;
  // export let segment;
</script>

<div>
  <!-- <Sidebar {location} /> -->
  <Sidebar />
  <div class="relative md:ml-64 bg-gray-200">
    <AdminNavbar />
    <Dashboard />
    <!-- <div class="px-4 md:px-10 mx-auto w-full -m-24"> -->
    <!-- <li><a class="{segment === 'profile' ? 'selected' : ''}" href="/badges">profile</a></li> -->
    <!-- <Router url="admin">
        <Route path="dashboard" component="{Dashboard}" /> -->
    <!-- <Route path="settings" component="{Settings}" />
        <Route path="tables" component="{Tables}" />
        <Route path="maps" component="{Maps}" /> -->
    <!-- </Router> -->
    <!-- <FooterAdmin /> -->
    <!-- </div> -->
  </div>
</div>
