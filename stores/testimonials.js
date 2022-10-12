import { defineStore } from 'pinia'

export const testimonialStore = defineStore('testimonials', {
  state: () => ({
    testimonials: [
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Evan You",
      },
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Felipe Morales",
      },
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Rodrigo Castillo",
      },
    ]
  })
})