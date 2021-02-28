<script>
  export let page;
  let items = {
    home: page === 'home' ? true : false,
    events: page === 'events' ? true : false,
    community: page === 'community' ? true : false,
    workshops: page === 'workshops' ? true : false,
    projects: page === 'projects' ? true : false,
  };
</script>

<div class="menu">
  <a href="/" class:active={items.home}>Inicio</a>
  <a href="/events" class:active={items.events}>Eventos</a>
  <a href="/workshops" class:active={items.workshops}>Talleres</a>
  <a href="/projects" class:active={items.projects}>Proyectos</a>
  <a href="/community" class:active={items.community}>Comunidad</a>
</div>

<style lang="scss">
  .menu {
    display: flex;
    justify-content: center;

    a {
      display: inline-flex;
      font-family: var(--font-title);
      font-weight: bold;
      color: var(--color-black-1);
      font-size: 1rem;
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
