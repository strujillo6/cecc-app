<template>
<section>
  <button @click="$store.commit('user/updateLocation', location)">{{$store.state.user.location}}</button>
</section>
</template>
<script>
export default {
    data:()=>({
        location:{
            n:'2',
            x:'1'
        }
    })
}
</script>
