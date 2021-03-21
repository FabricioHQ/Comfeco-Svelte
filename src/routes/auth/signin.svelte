<script lang="ts">
  // import SigninForm from '../../components/Auth/SignIn/SignIn_Form.svelte';
  import SigninForm from '../../components/Auth/SignIn/index.svelte';
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';
  let page: string = 'signin';
</script>

<svelte:head>
  <title>Iniciar sesión</title>
</svelte:head>

<LayoutBase {page}>
  <SigninForm />
</LayoutBase>
