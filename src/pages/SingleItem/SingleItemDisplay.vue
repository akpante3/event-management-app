<template>
    <div class="single-Item-display">
      <img src="https://vivisxn.com/wp-content/uploads/2019/01/Art-Entrepreneur-Louis-Buckworth-of-LX-60-Gallery-NYC-Art-Director-Cecilia-Weaver-VIVISXN-MEDIA-Cool-Art-in-NYC-Street-Art-and-Luxe-1.jpg" alt="Smiley">
      <div class="single-Item-button">vote now</div>
      <div class="single-item-describtion">
          <div class="single-item-describtion-header">
              <div class="single-item-name">HAUS Studio Website</div>
              <div class="created-time">3 DAYS 9 HOURS 43 MIN <i class="far fa-clock"></i></div>
          </div>
          <div class="single-item-author">by HAUS (United States)</div>
          <div class="single-item-details">We’re HAUS, an award-winning creative digital studio in
            Los Angeles. As pixel perfectionists we honed our skills and hardened our resolve
            to make the best damn magic on the internet.
          </div>
          <div class="single-item-categories">
              <div
                class="single-item-category"
                v-for="catergory in categories"
                :key="catergory"
              >
              {{catergory}}
              </div>
          </div>
      </div>
      <div class="user-vote">
         <UserVotes />
      </div>
    </div>
</template>

<script>
import UserVotes from './UserVotes';

export default {
  name: 'SingleItem',
  components: {
    UserVotes,
  },
  data() {
    return {
      categories: ['People', 'Magazines', 'Health', 'Season', 'interContinental',
        'People', 'Magazines', 'Health', 'Season', 'interContinental'],
    };
  },
};
</script>

<style scoped>
.single-item-describtion-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.single-item-author {
  font-weight: 200;
  font-size: 12px;
}
.single-item-name {
  font-weight: 500;
  font-size: 18px;
}
.single-item-describtion {
  width: 100%;
  padding: 30px;
  background-color: white;
  border: 1px solid rgb(255, 255, 255);
}
.single-item-describtion .created-time {
  text-align: right;
}
.single-Item-display {
  width: 60%;
  margin: 0 auto;
}
.single-Item-display img {
  width: 100%;
  height: 500px;
}
.single-Item-display .single-Item-button {
  width: 100%;
  padding: 30px;
  background-color: #48c5b6;
  text-align: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.single-Item-display .single-Item-button:hover {
  background-color: #128679 ;
}
.single-item-details {
  margin-top: 20px;
}
.single-item-categories {
  margin-top: 10px;
}
.single-item-category {
  display: inline-block;
  margin-right: 5px;
  margin-top: 10px;
  border-radius: 30px;
  text-align: center;
  background-color: none;
  border: 1px solid rgb(87, 87, 87);
  font-size: 14px;
  padding: 5px 15px;
  font-weight: 200;
  transition: 1s;
  cursor: pointer;
  font-weight: 300;
}
.user-vote {
  margin: 50px 0px;
  background-color: white;
  height: inline-block;
  width: 100%;
}
</style>
