<template>
  <div>
    <div class="slider-container">
      <p>
        <b>Wave Size</b> Overhead
      </p>
      <img src="static/img/weakwave.png" align="left" class="sliderIconLeft sliderIcon">
      <img src="static/img/strongwave.png" align="right" class="sliderIconRight sliderIcon">
      <input type="range" value="0" min="1" max="100" class="slider">

      <p>
        <b>Conditions</b> Lumpy
      </p>
      <img src="static/img/lesslumpy.png" align="left" class="sliderIconLeft sliderIcon">
      <img src="static/img/lumpy.png" align="right" class="sliderIconRight sliderIcon">
      <input type="range" value="0" min="1" max="100" class="slider">

      <p>
        <b>Crowd</b> Busy
      </p>
      <img src="static/img/notbusy.png" align="left" class="sliderIconLeft sliderIcon">
      <img src="static/img/busy.png" align="right" class="sliderIconRight sliderIcon">
      <input type="range" value="0" min="1" max="100" class="slider">
    </div>
    <div class="button-container">
      <button class="botton">GO</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.slider-container {
  padding: 20px;
  text-align: center;
  font-size: x-large;
}

.button-container {
  text-align: center;
  padding-bottom: 50px;
}

.botton {
  border: 1px solid #3498db;
  color: #ffffff;
  background: #545c71;
  padding: 10px 20px;
  font-size: 30px;
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
}

.botton:hover {
  color: #091733;
}

.slider {
  width: 60%;
  height: 20px;
  margin-bottom: 100px;
  margin-top: 40px;
  background-color: khaki;
  border-radius: 20px;
  opacity: 0.6;
  transition: opacity 0.3s;
  -webkit-appearance: none;
  
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: crimson;
  cursor: pointer;
  border-radius: 20px;
}

.sliderIcon {
  width: 20%;
  padding: 10px;
}

</style>



