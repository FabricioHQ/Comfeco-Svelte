<script lang="ts">
    import Footer from "../Footer/Footer.svelte";
    import Nav from "../Nav/Nav.svelte";

    export let page;
</script>

<Nav {page}/>

<slot />

<Footer />
