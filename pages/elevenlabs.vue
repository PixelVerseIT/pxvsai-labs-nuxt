<style>
  #voiceContainer {
    display: block;
    margin-bottom: 20px;
  }

  select {
    cursor: pointer;
    width: 150px;
    padding: 10px;
    border: 0px solid #ccc;
    border-radius: 5px;
    background-color: #343434;
    color: white;
  }

  .warning {
    color: rgb(255, 100, 100);
    background-color: #f4282833;
    margin-bottom: 20px;
    padding: 15px;
  }
</style>

<template>
  <div>
    <h1 class="title">ElevenLabs Text to Speech</h1>
    <!-- <p><a href="featureupgrade.html" class="customize"><i class="fa-solid fa-pen-to-square"></i> Edit prompt</a></p> -->


    <textarea class="textarea-input" id="textInput" rows="4" cols="50" placeholder="Enter your text here..."></textarea>



    <div id="voiceContainer">
      <label for="voiceSelect">Voice:</label>
      <select id="voiceSelect">
        <option value="21m00Tcm4TlvDq8ikWAM">Rachel</option>
        <option value="29vD33N1CtxCmqQRPOHJ">Drew</option>
        <option value="2EiwWnXFnvU5JabPnv8n">Clyde</option>
        <option value="5Q0t7uMcjvnagumLfvZi">Paul</option>
        <option value="AZnzlk1XvdvUeBnXmlld">Domi</option>
        <option value="CYw3kZ02Hs0563khs1Fj">Dave</option>
        <option value="D38z5RcWu1voky8WS1ja">Fin</option>
        <option value="EXAVITQu4vr4xnSDxMaL">Sarah</option>
        <option value="ErXwobaYiN019PkySvjV">Antoni</option>
        <!-- Add more voice options here -->
      </select>
    </div>

    <audio controls id="audioPlayer" style="display: none;">
      Your browser does not support the audio element.
    </audio>

    <p class="warning" id="warning" style="display: none;">You have exceeded the monthly limit. Upgrade to PixelVerseAI
      Plus for unlimited generations at <a href="https://ai.pixelverse.tech/#subscriptions">here.</a></p>

    <button class="b-primary" id="generateButton" @click="generateSpeech">
      Generate Speech!
      <i id="generateIcon" class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>
    </button>

    <button class="b-secondary" id="copyButton" style="display: none;" onclick="downloadSpeech()">
      Download Speech <i class="fa-solid fa-download icon-def-left"></i>
    </button>


    <span id="loadingSpinner" style="display: none;"><i class="fa-solid fa-atom fa-spin"></i></span>

    <p class="small-text">ElevenLabs can make mistakes. Please double-check responses. <a
        href="https://ai.pixelverse.tech/safety">Report here</a></p>
  </div>
</template>

<script>
async function generateSpeech() {
  const textInput = document.getElementById('textInput').value;
  const voiceSelect = document.getElementById('voiceSelect');
  const selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].value;

  // Check character limit
  const currentUser = getCurrentUser();
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const storedData = JSON.parse(localStorage.getItem(currentUser)) || {};
  storedData[currentMonth] = storedData[currentMonth] || { charactersGenerated: 0 };
  storedData[currentMonth].charactersGenerated += textInput.length;
  localStorage.setItem(currentUser, JSON.stringify(storedData));
  if (storedData[currentMonth].charactersGenerated > 200) {
    document.getElementById('warning').style.display = 'block';
    return;
  }

  // process.env.ELEVEN_LABS_API_KEY
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}?optimize_streaming_latency=3&output_format=mp3_44100_128`;
  const headers = {
    'Content-Type': 'application/json',
    'xi-api-key': eapiKey
  };
  const data = {
    text: textInput,
    model_id: 'eleven_monolingual_v1',
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.5
    }
  };
  try {
    document.getElementById("generateButton").innerHTML = 'AI is generating <i class="fa-solid fa-atom fa-spin fa-xl icon-def-left"></i>';
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (response.ok) {
      document.getElementById("generateButton").innerHTML = 'Generate Speech! <i id="generateIcon" class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>';
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.src = audioUrl;
      audioPlayer.style.display = 'block';
      audioPlayer.play();

      // Show Download Speech Button
      const copyButton = document.getElementById('copyButton');
      copyButton.style.display = 'block';
    } else {
      console.error('Error generating speech:', response.status);
    }
  } catch (error) {
    console.error('Error generating speech:', error);
  }
}


function downloadSpeech() {
  const audioPlayer = document.getElementById('audioPlayer');
  const audioUrl = audioPlayer.src;
  const link = document.createElement('a');
  link.href = audioUrl;
  link.download = 'speech.mp3';
  link.click(); // Trigger the download
}

function getCurrentUser() {
  return 'current_user';
}
</script>