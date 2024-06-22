// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      googleAiApiKey: process.env.NUXT_PUBLIC_GOOGLE_AI_API_KEY,
      elevenAiApiKey: process.env.NUXT_PUBLIC_ELEVENLABS_API_KEY
    }
  },
  // runtimeConfig: {
  //   public: {
  //     googleAiApiKey: process.env.NUXT_PUBLIC_GOOGLE_AI_API_KEY
  //   }
  // }
})
