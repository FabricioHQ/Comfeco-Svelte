<script lang="ts">
</script>

<slot />

<style lang="scss">
  :global(*, *::after, *::before) {
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  :global(img) {
    border: none;
    outline: none;
  }

  :global(body) {
    --background: #edf2f6;

    --color-primary-1: #8a178c;

    --color-secondary-1: #ffb703;

    --color-terciary-1: #521e87;

    --color-succes-1: #10b981;
    --color-succes-2: #ecfdf5;

    --color-error-1: #ef4444;
    --color-error-2: #fef2f2;

    --color-white-1: #ffffff;
    --color-white-2: #fbfbfb;

    --color-black-1: #1f2937;
    --color-black-2: #6b7280;
    --color-black-3: #9ca3af;

    --color-gray-1: #cfd4d8;
    --color-gray-2: #d6dade;

    --border-radius: 6px;
    --box-shadow: 0px 0px 2px 0.5px;
    --font-title: 'Roboto Slab';
    --font-text: 'Roboto';
  }
</style>
