<template>
  <div>
    <h1 class="title">ElevenLabs Text to Speech</h1>

    <textarea
      v-model="textInput"
      class="textarea-input"
      rows="4"
      cols="50"
      placeholder="Enter your text here..."
    ></textarea>

    <div id="voiceContainer">
      <label for="voiceSelect">Voice:</label>
      <select v-model="selectedVoice">
        <option value="21m00Tcm4TlvDq8ikWAM">Rachel</option>
        <option value="29vD33N1CtxCmqQRPOHJ">Drew</option>
        <option value="2EiwWnXFnvU5JabPnv8n">Clyde</option>
        <option value="5Q0t7uMcjvnagumLfvZi">Paul</option>
        <option value="AZnzlk1XvdvUeBnXmlld">Domi</option>
        <option value="CYw3kZ02Hs0563khs1Fj">Dave</option>
        <option value="D38z5RcWu1voky8WS1ja">Fin</option>
        <option value="EXAVITQu4vr4xnSDxMaL">Sarah</option>
        <option value="ErXwobaYiN019PkySvjV">Antoni</option>
      </select>
    </div>

    <audio
      v-if="audioUrl"
      :src="audioUrl"
      controls
      ref="audioPlayer"
      style="display: block; margin-bottom: 8px;"
    >
      Your browser does not support the audio element.
    </audio>

    <p v-if="showWarning" class="warning">
      You have exceeded the monthly limit. Upgrade to PixelVerseAI Plus for unlimited generations at
      <a href="https://ai.pixelverse.tech/#subscriptions">here.</a>
    </p>

    <button class="b-primary" @click="generateSpeech" :disabled="isGenerating">
      {{ generateButtonText }}
      <i :class="generateIconClass"></i>
    </button>

    <button v-if="audioUrl" class="b-secondary" @click="downloadSpeech">
      Download Speech <i class="fa-solid fa-download icon-def-left"></i>
    </button>

    <p class="small-text">
      ElevenLabs can make mistakes. Please double-check responses.
      <a href="https://ai.pixelverse.tech/safety">Report here</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
      selectedVoice: '21m00Tcm4TlvDq8ikWAM',
      audioUrl: null,
      showWarning: false,
      isGenerating: false,
    }
  },
  computed: {
    generateButtonText() {
      return this.isGenerating ? 'AI is generating' : 'Generate Speech!'
    },
    generateIconClass() {
      return this.isGenerating
        ? 'fa-solid fa-atom fa-spin fa-xl icon-def-left'
        : 'fa-solid fa-wand-magic-sparkles icon-def-left'
    },
  },
  methods: {
    async generateSpeech() {
      if (this.exceedsCharacterLimit()) {
        this.showWarning = true
        return
      }

      this.isGenerating = true
      const url = `https://api.elevenlabs.io/v1/text-to-speech/${this.selectedVoice}?optimize_streaming_latency=3&output_format=mp3_44100_128`
      const headers = {
        'Content-Type': 'application/json',
        'xi-api-key': this.$config.public.elevenAiApiKey,
      }
      const data = {
        text: this.textInput,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5,
        },
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        })

        if (response.ok) {
          const audioBlob = await response.blob()
          this.audioUrl = URL.createObjectURL(audioBlob)
          this.$nextTick(() => {
            this.$refs.audioPlayer.play()
          })
        } else {
          console.error('Error generating speech:', response.status)
        }
      } catch (error) {
        console.error('Error generating speech:', error)
      } finally {
        this.isGenerating = false
      }
    },
    downloadSpeech() {
      if (this.audioUrl) {
        const link = document.createElement('a')
        link.href = this.audioUrl
        link.download = 'speech.mp3'
        link.click()
      }
    },
    exceedsCharacterLimit() {
      const currentUser = this.getCurrentUser()
      const currentMonth = new Date().toLocaleString('en-US', { month: 'long' })
      const storedData = JSON.parse(localStorage.getItem(currentUser)) || {}
      storedData[currentMonth] = storedData[currentMonth] || { charactersGenerated: 0 }
      storedData[currentMonth].charactersGenerated += this.textInput.length
      localStorage.setItem(currentUser, JSON.stringify(storedData))
      return storedData[currentMonth].charactersGenerated > 200
    },
    getCurrentUser() {
      return 'current_user' // Replace with actual user authentication logic
    },
  },
}
</script>

<style>
        #voiceContainer {
            display: block;
            margin-bottom: 20px;
        }

        select{
            cursor: pointer;
            width: 150px;
            padding: 10px;
            border: 0px solid #ccc;
            border-radius: 5px;
            background-color: #343434;
            color: white;
        }

        .warning{
            color: rgb(255, 100, 100);
            background-color: #f4282833;
            margin-bottom: 20px;
            padding: 15px;
        }
    </style>