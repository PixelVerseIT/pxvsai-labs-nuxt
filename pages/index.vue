<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <i class="fa-solid fa-flask fa-4x logo"></i>
  <h1 id="greeting">Welcome to PixelVerse AI Labs.</h1>

  <div class="short-app-div">
    <a href="textimage.html">
      <div class="short-app"><i class="fa-solid fa-image fa-xl short-app-icon"></i>Image Gen</div>
    </a>
    <a href="apps/aisummariser.html">
      <div class="short-app"><i class="fa-solid fa-rectangle-list fa-xl short-app-icon"></i>AI Summariser</div>
    </a>
    <a href="elevenlabs.html">
      <div class="short-app"><i class="fa-solid fa-volume-high fa-lg icon"></i>11Labs Speech</div>
    </a>
    <a href="textdetect.html">
      <div class="short-app"><i class="fa-solid fa-expand fa-xl short-app-icon"></i>Text Extractor</div>
    </a>
  </div>



  <div class="input-container">
    <input id="search" class="search" type="text" placeholder="What can I do for you?"
      oninput="toggleSendIconColor(this)">
    <div class="go"><i class="fa-solid fa-paper-plane fa-xl" id="sendIcon"></i></div>
  </div>
</template>


<style>
.cta-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: poppins;
    font-size: 1.2rem;
    margin-top: 20px;
    transition: 0.3s;
}

.cta-button:hover {
    background-color: #0069d9;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Center vertically */
    align-items: center;
    /* Center horizontally */
    height: 90vh;
    /* Use full viewport height */
}

.input-container {
    position: relative;
    width: 80%;
    /* Adjust as needed */
    margin-top: 20px;
    display: flex;
    align-items: center;
    /* Center input vertically */
}

.search {
    padding: 15px;
    border: none;
    border-radius: 30px;
    width: 100%;
    font-size: 1.0rem;
    font-family: poppins;
    background: none;
    border: 2px solid #555;
    transition: 0.3s;
    color: white;
}

.go {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-radius: 30px;
    /* margin-right: 00px; */
    cursor: pointer;
    color: #555555;
    transition: 0.3s;
    padding: 10px 20px 10px 10px;
    background-color: #171717;
}

.search:focus {
    outline: none;
    border: 2px solid #007bff;
    animation: blink 8s infinite alternate;
    /* Apply the blink animation */
}

@keyframes blink {

    0%,
    100% {
        box-shadow: 0 0 15px #007bff;
        /* Initial and final shadow */
    }

    50% {
        box-shadow: 0 0 30px #007bff;
        /* Intermediate shadow */
    }

}



.search:hover {
    border: 2px solid #007bff;
}

h1 {
    margin: 10px;
}

.short-app {
    display: inline-block;
    padding: 8px 20px;
    border-radius: 25px;
    border: 1px solid #313535;
    font-size: 1.0rem;
    margin-right: 20px;
    /* Adjust as needed */
    transition: 0.2s;
}

.short-app:last-child {
    margin-right: 0;
    /* Remove margin from the last element */
}

.short-app-icon {
    color: white;
    margin-right: 10px;
}

.short-app:hover {
    background-color: #3d3d3d;
}

.short-app-div {
    display: inline-block;
}

.logo {
    color: #007bff;
    margin-bottom: 20px;
}


/* Banner Styles */
.premium-banner {
    position: fixed;
    bottom: 40px;
    /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    /* Adjust maximum width as needed */
    background-color: #1a448d;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 40px #1500ff;
}

/* Close Button Styles */
.premium-banner .close-btn {
    cursor: pointer;
    font-size: 40px;
}

.a2 {
    text-decoration: none;
    color: rgb(255, 160, 116);
}

#greeting {
    transition: opacity 0.5s ease-in-out;
}

@media (max-width: 1000px) {
    .input-container {
        width: 95%;
    }
}

@media (max-width: 569px) {
    .input-container {
        width: 100%;
    }
    #greeting{
        font-size: 1.5rem;
        text-align: center;
    }
    .short-app{
        padding: 8px 15px;
        margin-bottom: 4px;
        flex-wrap: wrap;
        font-size: 0.8rem;
    }
    .short-app-div{
        justify-content: center;
        text-align: center;
    }
    .content{
        height: 100vh;
        margin-top: -20%;
        font-size: 0.8rem;
    }
}
</style>


