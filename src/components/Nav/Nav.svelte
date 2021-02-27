<script lang="ts">
  import Logo from '../Utils/Icons/Logo.svelte';
  import Account from './Account/Account.svelte';
  import Menu from './Menu.svelte';

  export let page;
</script>

<nav>
  <Logo size={48} />
  <Menu {page} />
  <Account />
</nav>

<style lang="scss">
  nav {
    width: 100%;
    height: 5rem;
    background-color: var(--color-white-1);
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 8fr 15fr 8fr;
    grid-template-rows: 1fr;
    grid-gap: 4rem;
    padding: 0 3rem;
    align-items: center;
    z-index: 100;

    &::after {
      content: '';
      width: 100%;
      height: 7.5px;
      position: absolute;
      bottom: -7.5px;
      background: linear-gradient(
        90deg,
        var(--color-terciary-1),
        var(--color-primary-1),
        var(--color-secondary-1)
      );
    }
  }
</style>
