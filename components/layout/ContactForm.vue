<script setup>
import { configure } from "vee-validate";

const handleSubmit = async (values, actions) => {

  const formData = new FormData();
  formData.append('wpcf7-nombre', values.nombre);
  formData.append('wpcf7-correo', values.correo);
  formData.append('wpcf7-mensaje', values.mensaje);

  try {
    const formId = '633';
    const response = await $fetch(`https://v2.global3.cl/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
      method: 'POST',
      headers: {},
      body: formData
    })
    actions.resetForm()
    formSuccess.value = true
  } catch (error) {
    formSuccess.value = false
  }
}

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const initialValues = { nombre: "", correo: "", mensaje: "" };
const formSuccess = ref(false)
</script>

<template>
  <div class="px-6 md:px-14 pt-10 pb-16 bg-primary-shade dark:bg-white">
    <div class="space-y-4">
      <h3 class="text-white dark:text-primary text-2xl font-arimo uppercase tracking-wider">
        Escribanos
      </h3>
      <p class="text-grey-dark dark:text-grey-light text-sm">
        Tu dirección de correo electrónico no será publicada. Los campos
        obligatorios están marcados *
      </p>
    </div>
    <VForm class="flex flex-col space-y-8 mt-10" :initial-values="initialValues"
      v-slot="{ meta: formMeta, errors: formErrors }" @submit="handleSubmit">
      <div class="flex flex-col space-y-1">
        <label for="nombre"
          class="after:content-['*'] after:ml-0.5 after:text-orange-2 text-white dark:text-primary">Nombre</label>
        <VField name="nombre" v-slot="{ field, meta, errors }" rules="requiredName">
          <input v-bind="field"
            class="bg-primary dark:bg-white text-white dark:text-primary border border-border-color dark:border-border-color-light rounded-md p-3"
            :class="{
              'text-lime-200': meta.valid && meta.touched,
              'text-orange-2': !meta.valid && meta.touched,
            }" type="text" />
          <Transition>
            <VErrorMessage name="nombre" as="div" class="text-orange-2" />
          </Transition>
        </VField>
      </div>
      <div class="flex flex-col">
        <label for="correo"
          class="after:content-['*'] after:ml-0.5 after:text-orange-2 text-white dark:text-primary">Correo
          Electrónico</label>
        <VField name="correo" v-slot="{ field, meta, errors }" rules="email">
          <input v-bind="field"
            class="bg-primary dark:bg-white text-white dark:text-primary border border-border-color dark:border-border-color-light rounded-md p-3"
            :class="{
              'text-lime-200': meta.valid && meta.touched,
              'text-orange-2': !meta.valid && meta.touched,
            }" type="email" />
          <Transition>
            <VErrorMessage name="correo" class="text-orange-2" />
          </Transition>
        </VField>
      </div>
      <div class="flex flex-col">
        <label for="mensaje"
          class="after:content-['*'] after:ml-0.5 after:text-orange-2 text-white dark:text-primary">Mensaje</label>
        <VField name="mensaje" v-slot="{ field, meta, errors }" rules="requiredMessage">
          <textarea v-bind="field"
            class="bg-primary dark:bg-white text-white dark:text-primary border border-border-color dark:border-border-color-light rounded-md p-3"
            :class="{
              'text-lime-200': meta.valid && meta.touched,
              'text-orange-2': !meta.valid && meta.touched,
            }" cols="30" rows="10"></textarea>
          <Transition>
            <VErrorMessage name="mensaje" class="text-orange-2" />
          </Transition>
        </VField>
      </div>
      <Transition>
        <template v-if="formSuccess != ''">
          <div class="bg-white/5 rounded-md p-5">
            <p v-if="formSuccess" class="text-orange-2">
              {{
                formSuccess ? 'Tu correo ha sido enviado, te contactaremos a la brevedad.'
                :
                'Ha ocurrido un error al enviar tu correo, por favor inténtalo nuevamente.'
              }}
            </p>
          </div>
        </template>
      </Transition>
      <div>
        <button :disabled="!formMeta.valid" type="submit" :class="{
          'from-slate-400 via-slate-500 to-slate-600 text-white hover:shadow-slate-800 cursor-not-allowed':
            !formMeta.valid,
        }"
          class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link">
          Enviar
        </button>
      </div>
    </VForm>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
