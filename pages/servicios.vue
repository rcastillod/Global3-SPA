<template>
  <div>
    <LayoutPageHeader pageTitle="Servicios" />
    <section class="w-full md:mt-10">
      <LayoutPageSection>
        <div class="col-span-12 md:col-span-4 space-y-6">
          <div class="md:sticky md:top-40">
            <p class="text-grey-dark dark:text-grey-light text-xl">Servicios</p>
            <h3
              class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
            >
              Herramientas digitales para soluciones integrales
            </h3>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 mt-10 md:mt-0 space-y-20">
          <LayoutServiceCard
            v-for="(service, index) in services"
            :key="index"
            :service="service"
            :description="true"
          />
        </div>
      </LayoutPageSection>
    </section>
  </div>
</template>

<script>
definePageMeta({ layout: "page" });
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Desarrollo Web",
          icon: "../assets/images/webdev.png",
          excerpt:
            "Una de las principales herramientas para hacernos visibles ante nuestros clientes en el mundo digital es una página WEB.",
          description:
            "Una de las principales herramientas para hacernos visibles ante nuestros clientes en el mundo digital es una página WEB. El equipo global3 usa su experticia para optimizar el diseño vanguardista y las técnicas para generar una mayor visibilidad en la web con la intención de que los visitantes disfruten la experiencia de navegar en el sitio.",
        },
        {
          id: 2,
          title: "Diseño",
          icon: "../assets/images/design.png",
          excerpt:
            "Una de las principales herramientas para hacernos visibles ante nuestros clientes en el mundo digital es una página WEB.",
          description:
            "Una de las principales herramientas para hacernos visibles ante nuestros clientes en el mundo digital es una página WEB. El equipo global3 usa su experticia para optimizar el diseño vanguardista y las técnicas para generar una mayor visibilidad en la web con la intención de que los visitantes disfruten la experiencia de navegar en el sitio.",
        },
        {
          id: 3,
          title: "Intranet",
          icon: "../assets/images/intranet.png",
          excerpt:
            "Nuestro equipo de desarrolladores se preocupa de la mejora de procesos y gestión de la información de nuestros clientes.",
          description:
            "Nuestro equipo de desarrolladores se preocupa de la mejora de procesos y gestión de la información de nuestros clientes. Elaboramos programas y sistemas de gestión adaptados a las necesidades de cada cliente.",
        },
        {
          id: 4,
          title: "Ecommerce",
          icon: "../assets/images/ecommerce.png",
          excerpt:
            "Nuestras soluciones de integración de sistemas de compra en línea involucran altos estándares de seguridad.",
          description:
            "El aumento en el uso de dispositivos electrónicos ha impulsado el crecimiento de las transacciones electrónicas, es por esto que nuestras soluciones de integración de sistemas de compra en línea involucran altos estándares de seguridad.",
        },
        {
          id: 5,
          title: "Aplicaciones Móviles",
          icon: "../assets/images/appdev.png",
          excerpt:
            "Las aplicaciones móviles llegaron para quedarse y es por eso que Global3 se preocupa de entregar aplicaciones totalmente adaptables a la realidad del cliente y mercado.",
          description:
            "Las aplicaciones móviles llegaron para quedarse y es por eso que Global3 se preocupa de entregar aplicaciones totalmente adaptables a la realidad del cliente y mercado.",
        },
        {
          id: 6,
          title: "Community Manager",
          icon: "../assets/images/community.png",
          excerpt:
            "En Global3 nos preocupamos por hacer visibles a nuestros clientes y es por este motivo que nuestras estrategias en administración de redes sociales incrementan las interacciones.",
          description:
            "En Global3 nos preocupamos por hacer visibles a nuestros clientes y es por este motivo que nuestras estrategias en administración de redes sociales incrementan las interacciones.",
        },
        {
          id: 7,
          title: "SEO",
          icon: "../assets/images/seo.png",
          excerpt:
            "Nuestra experiencia y equipo de desarrolladores permiten generar estrategias personalizadas para mejorar la visibilidad de tu sitio.",
          description:
            "No es casualidad que tu sitio no aparezca dentro de los primeros puestos en buscadores, nuestra experiencia y equipo de desarrolladores permiten generar estrategias personalizadas para mejorar la visibilidad de tu sitio, además contamos con herramientas analíticas que permiten realizar seguimiento a las estrategias implementadas.",
        },
      ],
    };
  },
};
</script>
