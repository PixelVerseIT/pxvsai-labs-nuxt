<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://kit.fontawesome.com/dad552d9bf.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'head'
    }
  ]
})
</script>

<template>
    <div>

        <div class="hamburger" onclick="toggleMobileMenu()">
            <i class="fa-solid fa-bars fa-2x"></i>
        </div>
        <!-- Regular menu -->
        <div class="menu">
            <a href="/"><img class="image" src="https://ai.pixelverse.tech/app/image.png" alt=""></a>
            <p class="extra-small-text">Trending AI Tools</p>
            <a href="/elevenlabs"><div class="menu-select"><i class="fa-solid fa-volume-high fa-lg icon"></i>11Labs Speech</div></a>
            <a href="/aisummariser"><div class="menu-select"><i class="fa-solid fa-rectangle-list fa-lg icon"></i>AI Summariser</div></a>
            <a href="/codewriter"><div class="menu-select"><i class="fa-solid fa-code fa-lg icon"></i>Code writer</div></a>
            <a href="/textdetect"><div class="menu-select"><i class="fa-solid fa-font fa-lg icon"></i>Text Extractor</div></a>
            
            <!-- <a href="illusiondiffusion.html"><div class="menu-select"><i class="fa-solid fa-images fa-lg icon"></i>Illusion Diffusion</div></a> -->
            <a href="/pixelchat"><div class="menu-select"><i class="fa-solid fa-comment fa-lg icon"></i>PixelChat 2</div></a>
            <a href="/cortexchat"><div class="menu-select"><i class="fa-solid fa-brain fa-lg icon"></i>CortexChatV</div></a>
            <p class="extra-small-text">Multimodal AI</p>
            <a href="/textimage"><div class="menu-select"><i class="fa-solid fa-wand-magic-sparkles fa-lg icon"></i>Text to Image</div></a>
            <a href="/textvideo"><div class="menu-select"><i class="fa-solid fa-video fa-lg icon"></i>Text to Video</div></a>
            <a href="/textmusic"><div class="menu-select"><i class="fa-solid fa-music fa-lg icon"></i>Text to Music</div></a>
            <a href="/visionchat"><div class="menu-select"><i class="fa-solid fa-image fa-lg icon"></i>Photo Chat</div></a>


            <!-- <div>
                <p class="extra-small-text">Other and Settings</p>
                <a href="/app/premium.html"><div class="menu-select text-center"><i class="fa-solid fa-wand-magic-sparkles fa-lg aistore-icon"></i>Premium</div></a>
                <a href="/app/aistore.html"><div class="menu-select text-center"><i class="fa-solid fa-store fa-lg aistore-icon"></i>AI Store</div></a>
            </div> -->
            
            <p class="extra-small-text">Other and Settings</p>
            <div class="pro-buttons" style="padding-bottom: 5px; margin-top: 0px; display: flex; justify-content: space-between; margin-right: 10px; text-align: center;">
                <a href="/app/premium.html" style="width: 45%;"><div class="menu-select" id="plus-button"><i class="fa-solid fa-wand-magic-sparkles fa-lg aistore-icon"></i>Plus</div></a>
                <a href="/app/aistore.html" style="width: 45%;"><div class="menu-select"><i class="fa-solid fa-store fa-lg aistore-icon"></i>Apps</div></a>
            </div>
            <div style="text-align: center; display: grid;">
                <!-- <a href="s" style="text-align: center; font-size: 0.9rem; color: rgb(174, 174, 174);">Try the beta</a> -->
                <a href="#" style="text-align: center; font-size: 0.7rem; color: gray">Version: Closed Beta 3 (DESKTOP)</a>
                <p style="text-align: center; font-size: 0.6rem; color: gray">Design © 2024 <a href="https://ai.pixelverse.tech">PixelVerseAI</a>. Double-check AI responses.</p>
                <p style="text-align: center; font-size: 0.6rem; color: gray"><b>DESGINED BY HAYDEN. <a href="https://donate.stripe.com/9AQ2am8jZ2t1fLycMO">DONATE❤️</a></b></p>
                <p></p>
            </div>
            




            
        </div>
        <!-- Mobile menu -->
        <div class="mobile-menu" id="mobileMMenu">
            <a href="/app/index.html"><img class="image" src="https://ai.pixelverse.tech/app/image.png" alt=""></a>
            <p class="extra-small-text">Trending AI Tools</p>
            <a href="/app/elevenlabs.html"><div class="menu-select"><i class="fa-solid fa-volume-high fa-lg icon"></i>11Labs Speech</div></a>
            <a href="/app/apps/aisummariser.html"><div class="menu-select"><i class="fa-solid fa-rectangle-list fa-lg icon"></i>AI Summariser</div></a>
            <a href="/app/codewriter.html"><div class="menu-select"><i class="fa-solid fa-code fa-lg icon"></i>Code writer</div></a>
            <a href="/app/textdetect.html"><div class="menu-select"><i class="fa-solid fa-font fa-lg icon"></i>Text Extractor</div></a>
            <!-- <a href="/app/illusiondiffusion.html"><div class="menu-select"><i class="fa-solid fa-images fa-lg icon"></i>Illusion Diffusion</div></a> -->
            <a href="/app/pixelchat.html"><div class="menu-select"><i class="fa-solid fa-comment fa-lg icon"></i>PixelChat 2</div></a>
            <a href="/app/cortexchat.html"><div class="menu-select"><i class="fa-solid fa-brain fa-lg icon"></i>CortexChatV</div></a>
            <p class="extra-small-text">Multimodal AI</p>
            <a href="/app/textimage.html"><div class="menu-select"><i class="fa-solid fa-wand-magic-sparkles fa-lg icon"></i>Text to Image</div></a>
            <a href="textvideo.html"><div class="menu-select"><i class="fa-solid fa-video fa-lg icon"></i>Text to Video</div></a>
            <a href="/app/textmusic.html"><div class="menu-select"><i class="fa-solid fa-music fa-lg icon"></i>Text to Music</div></a>
            <a href="visionchat.html"><div class="menu-select"><i class="fa-solid fa-image fa-lg icon"></i>Photo Chat</div></a>
            <p class="extra-small-text">Other and Settings</p>
            <div class="pro-buttons" style="padding-bottom: 5px; margin-top: 0px; display: flex; justify-content: space-between;">
                <a href="/app/premium.html" style="width: 45%; margin: 0 2.5% 0 0;"><div class="menu-select premiumu"><i class="fa-solid fa-wand-magic-sparkles fa-lg aistore-icon"></i>Pro</div></a>
                <a href="/app/aistore.html" style="width: 45%; margin: 0 2.5%;"><div class="menu-select aistoreu"><i class="fa-solid fa-store fa-lg aistore-icon"></i>Apps</div></a>
            </div>
            <!-- <a href="/app/pixelchat.html"><div class="menu-select premiumu"><i class="fa-solid fa-wand-magic-sparkles fa-lg aistore-icon"></i>Pro</div></a>
            <a href="/app/cortexchat.html"><div class="menu-select aistoreu"><i class="fa-solid fa-store fa-lg aistore-icon"></i>Apps</div></a> -->
            <div style="text-align: center; display: grid;">
                <!-- <a href="s" style="text-align: center; font-size: 0.9rem; color: rgb(174, 174, 174);">Try the beta</a> -->
                <a href="#" style="text-align: center; font-size: 0.7rem; color: gray">Version: PX-2.5.0 (MOBILE)</a>
                <p style="text-align: center; font-size: 0.6rem; color: gray">Design © 2024 <a href="https://ai.pixelverse.tech">PixelVerseAI</a>. Double-check AI responses.</p>
                <p style="text-align: center; font-size: 0.6rem; color: gray"><b>DESGINED BY HAYDEN. <a href="https://donate.stripe.com/9AQ2am8jZ2t1fLycMO">DONATE❤️</a></b></p>
                <p></p>
            </div>

        </div>

    </div>
</template>
