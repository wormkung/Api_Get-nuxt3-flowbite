// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
         title:"Products",
         meta:[
            {name:"description",content:"รายละเอียดเว็บ"}
         ]

         
        }
      }
})
