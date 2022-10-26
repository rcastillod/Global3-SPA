import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('requiredName', (value) => {
    if ( required(value) ) {
      return true
    }
    return 'El nombre es obligatorio'
  })
  defineRule('email', (value) => {
    if ( email(value) && required(value) ) {
      return true
    }
    return 'Un email valido es obligatorio'
  })
  defineRule('requiredMessage', (value) => {
    if ( required(value) ) {
      return true
    }
    return 'El mensaje es obligatorio'
  })
})