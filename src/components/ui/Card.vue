<template>
<div class="card">
    <div class="card-image">
        <div class="card-image-info">
          <button @click="toggleLike" class="app-button ">
          <i :class="['fas', 'fa-heart', {'item-liked': liked }]">
            </i><span class="num-of-likes">{{numOfLikes}}</span>
          </button>
          <button
            class="btn-vote-now app-button"
            @click="$router.push('/single-item')"
          >Vote now</button>
        </div>
        <img src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzMwYmE2YzI0OWZmNDY5Zjc4NF9TcGFsZGluZy5qcGciXSxbInAiLCJjb252ZXJ0IiwiLWF1dG8tb3JpZW50ICJdLFsicCIsInRodW1iIiwiOTAweDYwMCswKzM4OCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjc4MHg1MjAjIl1d/Spalding.jpg" />
    </div>
    <div class="details">
      <h3><a class="details-header mt-2">Product technology</a></h3>
      <div class="col-md-12 zone">
          <a>From Czech Republic</a>
          <a class="text-right">February 05, 2019</a>
      </div>
      <br>
      <div class="user">
        <a
        v-on:click.prevent
        href="#" v-b-popover.html.focus.hover.top="popoverUserDetails" >
        <img src="https://cdn.domestika.org/c_fill,dpr_1.0,h_1200,t_base_params.format_jpg,w_1200/v1546529981/project-covers/000/458/388/458388-original.jpg?1546529981" /></a>
         <a>BY Akpante</a>
      </div>
    </div>
</div>
</template>

<script>


export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      liked: false,
      numOfLikes: 1,
    };
  },
  methods: {
    toggleLike() {
      const likesCount = this.liked ? this.numOfLikes - 1 : this.numOfLikes + 1;
      this.liked = !this.liked;
      this.numOfLikes = likesCount;
    },
    popoverUserDetails() {
      return `<div class="text-center pop-over" style="margin:20px">
         <img 
          class="mt-1 profile-img"
          src='http://www.gregoryherpe.fr/wp-content/themes/gregoryherpe2/includes/timthumb.php?src=http%3A%2F%2Fwww.gregoryherpe.fr%2Fwp-content%2Fuploads%2F2018%2F06%2FThe-Crown-Prince.jpg&w=900&h=1350&q=90'  
          width="70" height="70" style="border-radius: 500%"/>
         <p><strong>User</strong></p>
        </div>`;
    },
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  height: 400px;
  display: grid;
  grid-template-rows: 60% 40%;
  border: none;
  overflow: hidden;
}
.card-image {
  height: 240px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
img {
  transition: 0.5s;
}
.card .card-image img {
  width: 100%;
  height: 100%;
}
.card-image .card-image-info {
  position: absolute;
  z-index: 1;
  opacity: 0;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.card-image:hover .card-image-info {
  opacity: 1;
}
.app-button {
  border-radius: 30px;
  font-size: 14px;
  font-weight: 200;
  border: none;
  transition: 0.5s;
  cursor: pointer;
  font-weight: 600;
}
.btn-vote-now {
  position: absolute;
  top: 40%;
  left: 40%;
  padding: 10px;
  width: 100px;
}
.btn-vote-now:hover {
   color: #d1d1d1
}
.card .card-image:hover img {
  transform: scale(1.3);
}

.user {
  padding-top: 5px;
  border-top: 1px solid #f4f7f6;
}
.user img {
  width: 35px;
  height: 35px;
  border-radius: 500%
}
.user a {
  font-size: 13px
}
p {
 display: inline-block;
}
.details {
  padding: 1% 5%;
}
.details-header {
  font-size: 16px;
  font-weight: 500
}
.profile-img {
  border-radius: 500%
}
.zone {
  padding: 0%;
  font-size: 15px;
  font-weight: 100;
  display: grid;
  grid-template-columns: 2fr 2fr
}
.item-liked {
  color: red;
}

.num-of-likes {
  margin-left: 4px;
}
  /* TRANSITION */
</style>
