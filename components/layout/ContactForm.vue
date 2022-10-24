<template>
  <div class="px-14 pt-10 pb-16 bg-primary-shade dark:bg-white">
    <div class="space-y-4">
      <h3
        class="text-white dark:text-primary text-2xl font-arimo uppercase tracking-wider"
      >
        Escribanos
      </h3>
      <p class="text-grey-dark dark:text-grey-light text-sm">
        Su dirección de correo electrónico no será publicada. Los campos
        obligatorios están marcados *
      </p>
    </div>
    <form class="flex flex-col space-y-8 mt-10">
      <div class="flex flex-col space-y-1">
        <label
          for="nombre"
          class="after:content-['*'] after:ml-0.5 after:text-red-500 text-white dark:text-primary"
          >Nombre</label
        >
        <input
          id="nombre"
          type="text"
          required
          class="bg-primary dark:bg-white border border-border-color dark:border-border-color-light rounded-md p-3"
        />
      </div>
      <div class="flex flex-col">
        <label
          for="correo"
          class="after:content-['*'] after:ml-0.5 after:text-red-500 text-white dark:text-primary"
          >Correo Electrónico</label
        >
        <input
          id="correo"
          type="email"
          required
          class="bg-primary dark:bg-white border border-border-color dark:border-border-color-light rounded-md p-3"
        />
      </div>
      <div class="flex flex-col">
        <label
          for="mensaje"
          class="after:content-['*'] after:ml-0.5 after:text-red-500 text-white dark:text-primary"
          >Mensaje</label
        >
        <textarea
          id="mensaje"
          name="mensaje"
          cols="30"
          rows="10"
          required
          class="bg-primary dark:bg-white border border-border-color dark:border-border-color-light rounded-md p-3"
        ></textarea>
      </div>
      <div>
        <button
          class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>
