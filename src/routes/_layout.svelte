<script lang="ts">
</script>

<main>
  <div>
    <slot />
  </div>
</main>

<style lang="scss">
  :global(*, *::after, *::before) {
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  :global(body) {
    --background: #edf2f6;

    --color-primary-1: #8A178C;

    --color-secondary-1: #ffb703;

    --color-terciary-1: #521E87;

    --color-succes-1: #10B981;
    --color-succes-2: #ECFDF5;

    --color-error-1: #EF4444;
    --color-error-2: #FEF2F2;

    --color-white-1: #ffffff;
    --color-white-2: #fbfbfb;

    --color-black-1: #1f2937;
    --color-black-2: #6B7280;
    --color-black-3: #9CA3AF;

    --color-gray-1: #cfd4d8;
    --color-gray-2: #D6DADE;

    --border-radius: 6px;
    --box-shadow: 0px 0px 2px 0.5px;
    --font-title: "Roboto Slab";
    --font-text: "Roboto";
  }

  main {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    overflow: hidden;

    div {
      width: calc(100% + 15px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>
