<script>
  export let page;
  let items = {
    home: page === 'home' ? true : false,
    community: page === 'activity' ? true : false,
    workshops: page === 'ticket' ? true : false,
    projects: page === 'save' ? true : false,
  };
</script>

<div class="menu">
  <a href="/" class:active={items.home}>Home</a>
  <a href="/" class:active={items.community}>Community</a>
  <a href="/" class:active={items.workshops}>Workshops</a>
  <a href="/" class:active={items.projects}>Projects</a>
</div>

<style lang="scss">
  .menu {
    display: flex;
    justify-content: center;

    a {
      display: inline-flex;
      font-family: var(--font-title);
      font-weight: 500;
      color: var(--color-black-1);
      font-size: 1.25rem;
      align-items: center;
      justify-content: center;
      margin-right: 2.5rem;
      position: relative;

      &.active {
        color: var(--color-primary-1);
      }
      &.active::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: var(--color-primary-1);
        display: block;
        bottom: -1px;
      }
    }
  }
</style>
