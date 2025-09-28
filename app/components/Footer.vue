<template>
    <div class="contact">
        <a href="mailto://contact@voidence.cc"><button><p>contact@voidence.cc</p></button></a>
        <div class="small-vert-line"></div>
        <a href="https://github.com/2x10"><button><img src="/image/github.png"></button></a>
    </div>
</template>

<style lang="scss">
@use "~/assets/css/variables.scss" as *;

.small-vert-line
{
    background-color: $gray;
    height: 20px;
    width: 1px;
}

p
{
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif; 
    color: $gray;
}
.contact 
{
    position:relative;
    display: flex;
    justify-content: center; 
    align-items: center;     
    gap: 15px;         
}

.contact button
{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius:20px;
    border: 0px;
    height:40px;
    background-color: #00000000;
}

.contact button:hover
{
    background-color: #FFFFFF15;
    color: #3c1e98;
}


.contact img
{
    opacity: .47;
    height: 20px;
    width: auto;
}
</style>