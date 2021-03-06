<script>
  // import { currentUser } from '../../middleware/auth.js';
  import { createForm } from 'svelte-forms-lib';
  import { goto } from '@sapper/app';
  import * as yup from 'yup';
  // import Logo from '/images/comfeco2.png';

  import Button from '../../Auth/UI/Button.svelte';
  import Input from '../../Auth/UI/Input.svelte';

  console.log('hola');

  let publicEmail = '';
  let publicPassword = '';

  // export let auth;

  // function loggedIn() {
  //   if ($currentUser) {
  //     user.loggedIn = true;
  //     console.log($currentUser.email);
  //   }
  //   else {
  //     user.loggedIn = false;
  //   }
  // }

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Dirección de correo electrónico no válida')
        .required('Campo obligatorio'),
      password: yup.string().required('Campo obligatorio'),
    }),
    onSubmit: (values, form, errors) => {
      if (!errors.length) {
        try {
          const { email, password } = values;
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              publicEmail = email;
              publicPassword = password;
              goto('/dashboard');
            });
        } catch (e) {
          let message = e.message || e;
          console.log('Something went wrong:', message);
        }
      }
    },
  });
</script>

<div class="w-full h-screen bg-gray-50">
  <div class="container flex justify-center items-center mx-auto">
    <div class="lg:w-2/6 md:w-1/2 flex flex-col w-full mt-10 md:mt-5 m-5">
      <div>
        <img class="mx-auto w-24" src="/images/comfeco2.png" alt="Comfeco" />
        <h2
          class="text-center text-gray-900 text-3xl font-black title-font mb-8"
        >
          Ingresa a tu cuenta!
        </h2>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-8">
        <form on:submit={handleSubmit} class="space-y-6">
          <div>
            <Input
              type="email"
              name="email"
              label="Correo electrónico"
              on:chage={handleChange}
              on:blur={handleChange}
              bind:value={$form.email}
              error={$errors.email}
            />
            <Input
              type="password"
              name="password"
              label="Contraseña"
              on:chage={handleChange}
              on:blur={handleChange}
              bind:value={$form.password}
              error={$errors.password}
            />
          </div>
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4 text-purple-900 focus:ring-transparent border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Recordarme
              </label>
            </div>
            <div class="text-sm">
              <a
                href="forgot-password"
                class="text-purple-800 hover:text-purple-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <Button type="submit">Iniciar sesión</Button>
        </form>
      </div>
    </div>
  </div>
</div>
