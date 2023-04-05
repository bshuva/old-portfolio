<template>
  <Layout>
    <div class="container">
      <div class="photography-hero">
        <h1 class="photography-header">
          Collection of photos
        </h1>
      </div>
      <div class="grid">
        <img src="https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg" alt="">
        <img src="https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg" alt="">
        <img src="https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg" alt="">
        <img src="https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg" alt="">
      </div>
    </div>
  </Layout>
</template>

<script>
</script>

<style scoped>
.photography-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.photography-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}

.grid {
    display: grid;
grid-template-columns: repeat(2, 1fr);
gap:1rem;
max-width: 1920px;
margin: 0 auto;
}

img {
    max-width: 100%;
}

</style>
