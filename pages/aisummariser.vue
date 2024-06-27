<template>

<head>
  <title>AI Summariser | PixelVerseAI Labs</title>
</head>


    <div>
      <div class="h1-container">
        <h1 class="title">AI Summariser</h1> <div class="chip">All-New</div>
      </div>
      
      <p><a href="/app/featureupgrade.html" class="customize"><i class="fa-solid fa-pen-to-square"></i> Customize prompt</a></p>
  
      <p style="margin-bottom: 3px;">Paste the chunk of text you want to summarise:</p>
      <form id="promptForm">
        <textarea id="topicInput" class="textarea-input" placeholder="What do you want me to summarize?"></textarea>    
      </form>
      
      <button id="generateButton" class="b-primary" @click="generateCode">
        Summarise! <i class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>
      </button>
  
      <button id="copyButton" style="display: none;" class="b-secondary" @click="copyCode">
        Copy dot points <i class="fa-solid fa-copy icon-def-left"></i>
      </button>
      
      <div id="output" class="output-text-container"></div>
  
      <div class="followup-form" id="additionalQuestionForm" style="display: none;">
        <input class="followup-input" type="text" id="additionalQuestionInput" placeholder="Enter your additional question...">
        <button id="askButton" style="margin-left: 8px" class="b-primary" @click="askAgain">Ask Again</button>
      </div>
  
      <p class="small-text">PixelVerseAI can make mistakes. Please double-check responses. <a href="https://ai.pixelverse.tech/safety">Report here</a></p>
    </div>
  </template>
  
  <script>
  import { GoogleGenerativeAI } from '@google/generative-ai'
  
  export default {
    data() {
      return {
        genAI: null,
        messageHistory: "",
        converter: null,
        fullResponse: "", // New variable to store the complete response
      }
    },
    mounted() {
      // console.log('Google AI API Key:', this.$config.public.googleAiApiKey)
      this.genAI = new GoogleGenerativeAI(this.$config.public.googleAiApiKey)
      
      // Import showdown dynamically
      import('showdown').then(showdown => {
        this.converter = new showdown.default.Converter({ tables: true })
      })
    },
    methods: {
      async generateCode() {
        const topicInput = document.getElementById('topicInput').value
        const outputDiv = document.getElementById('output')
        const copyButton = document.getElementById('copyButton')
        const generateButton = document.getElementById('generateButton')
  
        copyButton.style.display = 'none'
        generateButton.innerHTML = 'Summarising Text <i class="fa-solid fa-atom fa-spin fa-xl icon-def-left"></i>'
        outputDiv.innerHTML = ''
        this.fullResponse = "" // Reset the full response
  
        try {
          const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" })
          const result = await model.generateContentStream("Summarise the following text and return in key dot points:" + topicInput)
  
          for await (const chunk of result.stream) {
            const chunkText = chunk.text()
            this.fullResponse += chunkText // Accumulate the full response
            outputDiv.textContent += chunkText // Show raw text while streaming
          }
  
          // Process the full response with Markdown converter
          if (this.converter) {
            outputDiv.innerHTML = this.converter.makeHtml(this.fullResponse)
          }
  
          copyButton.style.display = 'inline'
          document.getElementById('additionalQuestionForm').style.display = 'block'
        } catch (error) {
          console.error('Error:', error)
          alert('Google servers has declined this request because: INAPPROPRIATE_CONTENT_REQUEST_CITATION')
        } finally {
          generateButton.innerHTML = 'Summarise! <i class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>'
        }
      },
      copyCode() {
        const codeToCopy = document.getElementById('output').innerText
        navigator.clipboard.writeText(codeToCopy)
          .then(() => {
            document.getElementById("copyButton").innerHTML = 'Copied Text <i class="fa-solid fa-check icon-def-left"></i>'
          })
          .catch(err => {
            console.error('Error copying code:', err)
            alert('Failed to copy code to clipboard.')
          })
      },
      async askAgain() {
        const topicInput = document.getElementById('topicInput').value
        const outputDiv = document.getElementById('output')
        const copyButton = document.getElementById('copyButton')
        const generateButton = document.getElementById('generateButton')
        const additionalQuestionInput = document.getElementById('additionalQuestionInput').value
  
        this.messageHistory += `\n\nUser: ${additionalQuestionInput}`
  
        outputDiv.innerHTML = ''
        this.fullResponse = "" // Reset the full response
        copyButton.innerHTML = 'Copy Text <i class="fa-solid fa-copy icon-def-left"></i>'
        console.log("yes")
        copyButton.style.display = 'none'
        generateButton.innerHTML = 'Searching context provided <i class="fa-solid fa-atom fa-spin fa-xl icon-def-left"></i>'
  
        try {
          const model = this.genAI.getGenerativeModel({ model: "gemini-pro" })
          const result = await model.generateContentStream(topicInput + "\n\n" + "Message History:" + this.messageHistory)
  
          for await (const chunk of result.stream) {
            const chunkText = chunk.text()
            this.fullResponse += chunkText // Accumulate the full response
            outputDiv.textContent += chunkText // Show raw text while streaming
          }
  
          // Process the full response with Markdown converter
          if (this.converter) {
            outputDiv.innerHTML = this.converter.makeHtml(this.fullResponse)
          }
  
          copyButton.style.display = 'inline'
        } catch (error) {
          console.error('Error:', error)
          alert('Google servers has declined this request because: INAPPROPRIATE_CONTENT_REQUEST_CITATION')
        } finally {
          generateButton.innerHTML = 'Summarise! <i class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>'
        }
  
        window.scrollTo(0, 0)
      }
    }
  }
  </script>