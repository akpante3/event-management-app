<template>
<div class="card">
    <div>
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
        <img src="http://www.gregoryherpe.fr/wp-content/themes/gregoryherpe2/includes/timthumb.php?src=http%3A%2F%2Fwww.gregoryherpe.fr%2Fwp-content%2Fuploads%2F2018%2F06%2FThe-Crown-Prince.jpg&w=900&h=1350&q=90" /></a>
         <a>BY Akpante</a>
      </div>
    </div>
</div>
</template>

<script>


export default {
  name: 'Footer',
  components: {},
  data() {},
  methods: {
    popoverUserDetails() {
        // Both title and content specified as a function in this example
        // and will be called each time popover is opened
        // return {
        //   html: true,
        //   // title: () => {
        //   //   return ``
        //   // },
        //   content: () => {
        //     return ``
        //   }
        return `<div class="text-center pop-over" style="margin:20px">
         <img 
          class="mt-1 profile-img"
          src='http://www.gregoryherpe.fr/wp-content/themes/gregoryherpe2/includes/timthumb.php?src=http%3A%2F%2Fwww.gregoryherpe.fr%2Fwp-content%2Fuploads%2F2018%2F06%2FThe-Crown-Prince.jpg&w=900&h=1350&q=90'  
          width="70" height="70" style="border-radius: 500%"/>
         <p><strong>User</strong></p>
        </div>`
      }
    }
}
</script>

<style scoped>
.card {
    box-sizing: border-box;
    height: 400px;
    display: grid;
    grid-template-rows: 60% 40%;
    border: none
}
img {
  width: 100%; /* or any custom size */
  height: 100%;
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
  font-weight: 600
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

  /* TRANSITION */
</style>
