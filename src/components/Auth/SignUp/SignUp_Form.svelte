<script>
  import { createForm } from 'svelte-forms-lib';
  import { goto, stores } from '@sapper/app';
  const { session } = stores();
  import * as yup from 'yup';

  // import comfecoLogo from 'images/comfeco2.png';

  import Button from '../../Auth/UI/Button.svelte';
  import Input from '../../Auth/UI/Input.svelte';
  import SignIn from '../SignIn/SignIn.svelte';

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: '',
      email: '',
      password1: '',
      password2: '',
    },
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .required('Campo obligatorio'),
      email: yup
        .string()
        .email('Dirección de correo electrónico no válida')
        .required('Campo obligatorio'),
      password1: yup
        .string()
        .min(8, 'Mínimo 8 caracteres')
        .required('Campo obligatorio'),
      password2: yup
        .string()
        .min(8, 'Mínimo 8 caracteres')
        .oneOf([yup.ref('password1')], 'Las contraseñas deben coincidir')
        .required('Campo obligatorio'),
    }),
    // onSubmit: (values) => {
    //   signUp();
    //   console.log(values);
    // },
    onSubmit: (values, form, errors) => {
      if (!errors.length) {
        try {
          const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          };
          const SignIn = async () => {
            const { email, password1, username } = values;
            console.log('asd2');
            const response = await fetch('api/auth/signup', {
              method: 'POST',
              headers,
              body: JSON.stringify({ username, email, password: password1 }),
            });

            const parsed = await response.json();
            console.log(parsed);

            if (parsed.error) {
              alert = parsed.error;
            } else {
              $session.user = parsed.user;
              console.log('123');
              await goto('/').then(() => {
                location.reload();
              });
            }
          };
          SignIn();
        } catch (e) {
          let message = e.message || e;
          console.log('Something went wrong:', message);
        }
      }
    },
  });

  // function signUp() {
  //   auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  // }
</script>

<div class="w-full h-screen bg-gray-50">
  <div class="container flex justify-center items-center mx-auto">
    <div class="lg:w-2/6 md:w-1/2 flex flex-col w-full mt-10 md:mt-5 m-5">
      <div>
        <img class="mx-auto w-24" src="/images/comfeco2.png" alt="Comfeco" />
        <h2
          class="text-center text-gray-900 text-3xl font-black title-font mb-8"
        >
          Crea tu cuenta!
        </h2>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-8">
        <form on:submit={handleSubmit}>
          <Input
            type="text"
            name="username"
            label="Nombre de usuario"
            on:chage={handleChange}
            on:blur={handleChange}
            bind:value={$form.username}
            error={$errors.username}
          />
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
            name="password1"
            label="Contraseña"
            on:chage={handleChange}
            on:blur={handleChange}
            bind:value={$form.password1}
            error={$errors.password1}
          />
          <Input
            type="password"
            name="password2"
            label="Confirmar contraseña"
            on:chage={handleChange}
            on:blur={handleChange}
            bind:value={$form.password2}
            error={$errors.password2}
          />
          <div class="mt-8">
            <Button type="submit">Registrarme</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
