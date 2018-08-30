<template>
  <div >

    <!-- normal -->
    <div class="ih-item circle effect1"><a href="#">
        <div class="spinner"></div>
        <!-- <div class="img"><img src="" alt="img"></div> -->
        <div class="img"><img :src="img" alt="img"></div>
        <div class="info">
          <h3>Conoce más</h3>
        </div></a></div>
    <!-- end normal -->

  </div>

</template>
<script>
export default {
  props:{
    img:{
      type:String
    }
  }
}
</script>

