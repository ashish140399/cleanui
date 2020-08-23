<template>
  <div>
    <div class="rebaseouter">
      <img v-bind:src = "image" class="rebaseimage" />
      <div>
        <h4>Occured</h4>
        <div class="rebasegreen">+78.55 TREND(+1.50%)</div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../../../../../public/rebase.png'
export default {
  data: function () {
    return {
      image: image,
    }
  },
}
</script>
<style>
  .rebaseouter{
  display: flex;
  flex-direction: row;
}
.rebaseimage{
  height: 50px;
  width: auto;
  border-radius: 10px;
  margin-right: 10px;
}
.rebaseouter h4{
  margin: 0 !important;
  margin-bottom: -5px;
  color:#fff ;
}
.rebasegreen{
  color: #41c995 ;
}
</style>
