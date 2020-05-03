<template>
  <div class="container">
    <div class="carousel">
      <b-carousel id="carousel-1" v-model="slide"
          :interval="4000"
          controls
          indicators
          img-width="1024"
          img-height="350"
      >
          <b-carousel-slide>
              <template v-slot:img>
              <img
                  class="d-block img-fluid w-100 img-banner"
                  src="../assets/image/food1.jpg"
                  alt="image slot"
              >
              </template>
          </b-carousel-slide>
      </b-carousel>
        <div class="textjumbo">          
          <h1 class="display-4 text-white text-right">NUXT JS-PWA-API</h1>
          <p class="lead text-white text-right">Membuat aplikasi Nuxt JS dengan menimplementasikan kosep PWA dan menggunakan API TheMealDB</p>
          <p class="lead text-white text-right">Daarusy Gibran</p>
          <p class="lead text-white text-right">_____________________________________________________________________________________</p>          
          <a class="btn btn-primary btn-lg" style="margin-left:750px" href="#mulai" role="button">Get Started</a>
        </div>
    </div>
    <br>
    <div v-for="(header, index) in headers" :key="index" class="jumbotron" id="mulai">
      <h1 class="display-4">
        {{ header.strMeal }}
        <span class="badge badge-success">{{ header.strArea }}</span>
      </h1>
      <hr class="my-4" />
      <div class="row">
        <div class="col-md-4 align-self-center">
          <img
            :src="header.strMealThumb"
            class="img-thumbnail"
            alt
            srcset
            height="200px"
          />
        </div>
        <div class="col-md-8">
          <p class="text-left">
            {{ header.strInstructions.substring(0, 1000) }}
          </p>
          <div class="row">
            <div class="col-md-auto" v-for="(n, index) in 20" :key="index">
              <div v-if="header['strIngredient' + n] != ''">
                <p>
                  {{ header['strIngredient' + n] }}
                  <span class="badge badge-primary">{{
                    header['strMeasure' + n]
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br class="my-4" />
      <p class="lead">
        <!-- aboutnya warning -->
        <router-link class="btn btn-primary" to="#"
          >Learn More</router-link
        >
      </p>
    </div>    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BigCard',
  props: {
    msg: String
  },
  data() {
    return {
      posts: null,
      errors: [],
      headers: null
    };
  },
  created() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => {
        this.posts = response.data.meals;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(response => {
        this.headers = response.data.meals;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textjumbo {
  margin-top: -500px;
  margin-left: 70px;
  position: absolute;
}
</style>
