<template>
<div>
    <div class="h1-container">
                <h1 class="title">AI Summariser</h1> <div class="chip">All-New</div>
            </div>
            
            <p><a href="/app/featureupgrade.html" class="customize"><i class="fa-solid fa-pen-to-square"></i> Customize prompt</a></p>
    
            <p style="margin-bottom: 3px;">Paste the chunk of text you want to summarise:</p>
            <form id="promptForm">
                <textarea class="textarea-input" id="topicInput" placeholder="What do you want me to summarize?"></textarea>    
            </form>
            
            <button id="generateButton" class="b-primary">
                Summarise! <i class="fa-solid fa-wand-magic-sparkles icon-def-left"></i>
            </button>

            <button id="copyButton" style="display: none;" class="b-secondary">
                Copy dot points <i class="fa-solid fa-copy icon-def-left"></i>
            </button>
            
            <div id="output" class="output-text-container"></div>

            <div class="followup-form" id="additionalQuestionForm" style="display: none;">
                <input class="followup-input" type="text" id="additionalQuestionInput" placeholder="Enter your additional question...">
                <button id="askButton" class="b-primary">Ask Again</button>
            </div>

            <p class="small-text">PixelVerseAI can make mistakes. Please double-check responses. <a href="https://ai.pixelverse.tech/safety">Report here</a></p>
</div>
</template>