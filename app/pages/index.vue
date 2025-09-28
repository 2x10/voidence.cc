<script setup>
const buttons = 
[
    {
        title: "mail.voidence.cc",
        demoLink: "https://mail.voidence.cc",
        srcLink: "https://github.com/mailcow/mailcow-dockerized"
    },
    {
        title: "pterodactyl.voidence.cc",
        demoLink: "https://pterodactyl.voidence.cc",
        srcLink: "https://github.com/pterodactyl/panel"
    },

    {
        title: "voidence.cc",
        demoLink: "https://voidence.cc",
        srcLink: "https://github.com/2x10/voidence.cc"
    },
    {
        title: "dev.voidence.cc",
        demoLink: "https://dev.voidence.cc",
        srcLink: "https://github.com/2x10/portfolio"
    },
    {
        title: "dinosaur.voidence.cc",
        demoLink: "https://dinosaur.voidence.cc",
        srcLink: "https://github.com/2x10/chrome-dino-cheat"
    },
    {
        title: "borzoi.voidence.cc",
        demoLink: "https://borzoi.voidence.cc",
        srcLink: "https://github.com/2x10/borzoi-gallery"
    },
    {
        title: "honolulu.voidence.cc",
        demoLink: "https://honolulu.voidence.cc",
        srcLink: "https://github.com/2x10/honolulu-elite.club"
    },
]
</script>

<template>    
    <div class="content">
        <h1 class="header">voidence network</h1>
        <div class="line"></div> 
        <div class="buttons">
            <StatusButton 
                v-for="button in buttons"
                v-bind="button"
            />
        </div>
    </div>
</template>

<style lang="scss" scooped>
@use "~/assets/css/variables.scss" as *;

.header {
    z-index: 1;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.863);
    font-size: 4rem;
    letter-spacing: -2px;

    background-image: linear-gradient(
        90deg,
        #1100ff,
        #df5eff,
        #1100ff
    );

    background-size: 200% auto; /* wide enough for seamless loop */
    background-clip: text;
    -webkit-background-clip: text; /* Safari fix */
    -webkit-text-fill-color: transparent;

    animation: gradient 5s linear infinite;
    text-shadow: 0 0 20px rgba(45, 46, 87, 0.8);
}

@keyframes gradient {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
}

.line
{
    margin: 0 0 40px;
    height:1px;
    width:100%;

    background-color: $gray;
}

.content
{
    display: grid;
    justify-content: center;
    text-align: center
}

.buttons
{
    display: flex;
    flex-wrap: wrap; 
    gap: 0.5rem;
    justify-content: center;
}
</style>