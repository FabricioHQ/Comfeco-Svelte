<script lang="ts">
  // import SignUpForm from '../../components/Auth/SignUp/SignUp_Form.svelte';
  import SignUpForm from '../../components/Auth/SignUp/index.svelte';
  import LayoutBase from '../../components/Layout/Layout_Base.svelte';

  let page: string = 'signup';
</script>

<svelte:head>
  <title>Registrarse</title>
</svelte:head>

<LayoutBase {page}>
  <SignUpForm />
</LayoutBase>
