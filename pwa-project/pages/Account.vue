<template>
  <div id="account">
    <img src="static/img/user.jpg" style="width: 100%">
    <div class="title">
      <h1>Lawrence</h1>
    </div>
    <div class="main-container">
      <p>Level: Intermediate</p>
      <p>Subscription: Free</p>
      <div>
        <img src="static/img/subcription.jpg" style="width: 45%">
      </div>
      <p>Wave Count: 233</p>
      <hr>
      <p>
        <b>Session Stats</b>
      </p>
      <p>Wave Size</p>
      <div>
        <img src="static/img/piechart.jpg" style="width: 90%">
      </div>

      <div class="stats-bar">
        <div class="headhigh-bar" style="width:80%">Head High</div>
      </div>

      <div class="stats-bar">
        <div class="overhead-bar" style="width:48%">Over Head</div>
      </div>

      <div class="stats-bar">
        <div class="doubleoverhead-bar" style="width:66%">Double Over Head</div>
      </div>

      <div class="stats-bar">
        <div class="tripleoverhead-bar" style="width:32%">Triple Over Head</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
.subscription-image-container {
  margin-bottom: 15px;
}

.info {
  color: #4b4fe2;
  margin-right: 16px;
}

.main-container {
  padding: 30px;
}

.stats-bar {
  background-color: #bdc9ea;
  border-radius: 16px;
  margin: 16px;
}

.headhigh-bar {
  padding: 0.1em 16px;
  border-radius: 16px;
  text-align: center;
  color: #ffffff;
  background-color: #70ac48;
}

.overhead-bar {
  padding: 0.1em 16px;
  border-radius: 16px;
  text-align: center;
  color: #ffffff;
  background-color: #fe0000;
}

.doubleoverhead-bar {
  padding: 0.1em 16px;
  border-radius: 16px;
  text-align: center;
  color: #ffffff;
  background-color: #ffc000;
}

.tripleoverhead-bar {
  padding: 0.1em 16px;
  border-radius: 16px;
  text-align: center;
  color: #ffffff;
  background-color: #4472c7;
}
</style>
