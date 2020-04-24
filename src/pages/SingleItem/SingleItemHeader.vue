<template>
    <div class="single-page-header">
      <div class="single-item-header">
          <div>Nominees / HAUS Studio Website from United States</div>
          <div class="single-header-right">
            <div class="user-image" v-for="(image, index) in images" :key="index">
              <img :src=image alt="Smiley">
            </div>
            <button class="single-header-button" @click="toggleLike">
              <i :class="['fas', 'fa-heart', {'item-liked': liked }]"></i>
              <span class="num-of-likes">{{numOfLikes}}</span>
            </button>
            <button class="single-header-button">
              collect
            </button>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'SingleItem',
  components: {},
  data() {
    return {
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/81YTwEmFUDL._UX385_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7ygCckpibbZesJ990AiX0DgBFyi5QhehN4wORRPx9tsmEqiVzw',
        'https://cdn.domestika.org/c_fill,dpr_1.0,h_1200,t_base_params.format_jpg,w_1200/v1546529981/project-covers/000/458/388/458388-original.jpg?1546529981',
        'https://images-na.ssl-images-amazon.com/images/I/81YTwEmFUDL._UX385_.jpg',
      ],
      liked: false,
      numOfLikes: 7,
    };
  },
  methods: {
    toggleLike() {
      const likesCount = this.liked ? this.numOfLikes - 1 : this.numOfLikes + 1;
      this.liked = !this.liked;
      this.numOfLikes = likesCount;
    },
  },
};
</script>

<style scoped>
.single-page-header {
  width: 100%;
  margin: 0px;
  animation: singlePageHeader 1.5s ease forwards;
}
@keyframes singlePageHeader {
  0%{ margin: 60px 400px 400px 600px;}
  100%{ margin: 60px 0px 0px 0px; }
}
.single-item-header {
  color: black;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.single-header-right {
  text-align: right;
}
.user-image  {
  display: inline-block;
  margin: 0px 5px;
}
.user-image img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.single-header-button {
  border-radius: 30px;
  width: 70px;
  background-color: none;
  border: 1px solid rgb(87, 87, 87);
  font-size: 14px;
  padding: 5px;
  font-weight: 200;
  transition: 0.5s;
  cursor: pointer;
  font-weight: 300;
  outline: none;
}
.item-liked {
  color: red;
}
.num-of-likes {
  margin-left: 4px;
}
</style>
