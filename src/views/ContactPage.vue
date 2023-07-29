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
import emailjs from '@emailjs/browser';
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      userId: process.env.VUE_APP_EMAILJS_USER_ID,
      serviceId: process.env.VUE_APP_EMAILSJS_SERVICE_ID,
      templateId: process.env.VUE_APP_EMAILJS_SERVICE_TEMPLATEID,
      toast: useToast()
    }
  },
  computed: {

  },
  methods: {

   async submitForm() {
      console.log(this.$refs.form)
      emailjs.sendForm(
          this.serviceId,
          this.templateId,
          this.$refs.form,
          this.userId,
      )
          .then((success) => {
                console.log(success)
                this.toast.success('Votre message a bien été envoyé.')
              },
              (error) => {
                this.toast.error(error)
              })
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>
