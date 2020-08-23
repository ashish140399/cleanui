<template>
  <div>
    <div class="rebaseouterbtm">
      <img v-bind:src = "image" class="rebaseimage" />
      <div>
        <h4>Upcoming</h4>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../../../../../public/rebasewhite.png'
export default {
  data: function () {
    return {
      image: image,
    }
  },
}
</script>
<style>
.rebaseouterbtm{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    background-image: linear-gradient(-13deg, #015fe9 0%, #0189f1 100%);
    padding: 1.33rem 1.66rem;
    margin-bottom: 2rem;
}
.rebaseimage{
  height: 50px;
  width: auto;
  border-radius: 10px;
  margin-right: 10px;
}
.rebaseouterbtm h4{
  margin: 0 !important;
  color:#fff ;
}
.rebasered{
  color: #41c995 ;
}
</style>
