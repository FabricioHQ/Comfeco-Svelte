<script>
  import AccountGetStart from './Account_GetStart.svelte';

  import { stores } from '@sapper/app';
  import AccoutUser from './Accout_User.svelte';
  const { session } = stores();
</script>

<div class="account">
  {#if !$session.user}
    <AccountGetStart />
  {:else}
    <AccoutUser />
  {/if}
</div>

<style lang="scss">
  .account {
    display: flex;
    justify-self: flex-end;
  }
</style>
