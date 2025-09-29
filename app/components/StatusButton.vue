<script setup lang="ts">
    defineProps<{
        title: string
        demoLink: string
        srcLink: string
    }>()
</script>

<template>
    <div class="status-button">
        <a :href="demoLink" target="_blank" rel="noreferrer" class="half">
            <p>{{ title }}</p>
        </a>
        <div class="vert-line"></div>
        <a :href="srcLink" target="_blank" rel="noreferrer" class="half">
            <img src="/image/github.png" alt="GitHub" />
        </a>
    </div>
</template>

<style lang="scss">
    @use "~/assets/css/variables.scss" as *;

    body 
    {
        color: $gray
    }

    .status-button 
    {
        margin-bottom: 40px;
        z-index: 1;
        display: flex;
        border: 1px solid $gray;
        border-radius: 10px;
        overflow: hidden;
        background-color: #000;
        height: 40px;
        width: fit-content;
    }

    .status-button a.half 
    {
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        color: #fff;
        text-decoration: none;
        transition: $button-animation;
    }

    .status-button a.half:hover 
    {
        background-color: #232323;
    }

    .vert-line 
    {
        width: 1px;
        background-color: $gray;
        height: 100%;
    }

    .status-button img 
    {
        width: 20px;
        height: 20px;
    }

    .status-button p 
    {
        font-size: 12px;
        margin: 0;
    }
</style>