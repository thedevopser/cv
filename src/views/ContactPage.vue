<template>
  <div class="flex flex-col text-green-400 w-6/12">
    <h2 class="text-3xl font-bold mb-10">Contactez-moi</h2>
    <form ref="form" @submit.prevent="submitForm">
      <div class="mb-5">
        <label class="block mb-2" for="name">Nom et prénom</label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" name="name" v-model="name" type="text" placeholder="Votre nom ..." required>
      </div>

      <div class="mb-5">
        <label class="block mb-2" for="email">Email</label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" name="email" v-model="email" type="email" placeholder="Votre email ..." required>
      </div>

      <div class="mb-5">
        <label class="block mb-2" for="message">Message</label>
        <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="30" rows="5" id="message" name="message" v-model="message" placeholder="Message ..."
            required></textarea>
      </div>

      <div class="mb-5">
        <!-- Vous pouvez utiliser Google reCAPTCHA ou un autre service pour la vérification anti-bot -->
        <!-- Votre composant de vérification anti-bot irait ici -->
      </div>

      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">Envoyer
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from 'vue-toastification'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const form = ref(null)
    const toast = useToast()

    const userId = process.env.VUE_APP_EMAILJS_USER_ID
    const serviceId = process.env.VUE_APP_EMAILSJS_SERVICE_ID
    const templateId = process.env.VUE_APP_EMAILJS_SERVICE_TEMPLATEID

    const submitForm = () => {
      emailjs.sendForm(serviceId, templateId, form.value, userId)
          .then(() => {
            toast.success('Votre message a bien été envoyé.')
            // Reset form field
            name.value = ''
            email.value = ''
            message.value = ''
          }, (error) => {
            toast.error(error)
          })
    }

    return { name, email, message, form, submitForm }
  }
}
</script>
