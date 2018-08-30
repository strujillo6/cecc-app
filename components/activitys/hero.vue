<template>
    <header class="hero" :style="{backgroundImage:'url('+img+')'}">
        <div class="hero__container">
            <h1 class="hero__title display-2 font-weight-thin ">{{title}}</h1>
            <h2 class="hero__ subtitle subheading">{{subtitle}}</h2>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        img:{
          type:String
        },
        title:{
          type:String,
          default: "Actividades Culturales"
        },
        subtitle:{
          type: String,
          default: "Animate a compartir, socializar, aprender y divertirte."
        }
    }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.hero{
    width: 100%;
    min-height: 45vh;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    &__container{
        width: 100%;
        height: 100%;
        background-color: rgba( #3F51B5, .65 );
        color: white;
        padding-bottom: 1em;
        padding-left: 1em;
        padding-right: 1em;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        @include breakpoint(tablet){
          padding-bottom: 4em;
          padding-left: 3em;
          padding-right: 3em;
        }
    }
}
</style>
