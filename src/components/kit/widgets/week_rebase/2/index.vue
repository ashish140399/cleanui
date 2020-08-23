<template>
  <div>
    <div class="rebaseouter">
      <img v-bind:src = "image" class="rebaseimage" />
      <div>
        <h4>Occured</h4>
        <div class="rebasered">+78.55 TREND(+1.50%)</div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../../../../../public/rebasered.png'
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
  border-radius: 15px;
  background-color: rgba(14,14,29,0);
  border: 2px solid #2c2a3f;
  padding: 1.33rem 1.66rem;
  margin-bottom: 2rem;
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
.rebasered{
  color: #41c995 ;
}
</style>
