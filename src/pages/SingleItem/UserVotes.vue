<template>
  <div class="user-vote">
    <div class="user-votes-image">
      <img src="https://content-stage.likewiseapp.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg" />
    </div>
    <div>
      <div>Bill gates</div>
      <div class="user-vote-location">United State</div>
    </div>
    <div class="voting-grades">
      <div v-for="(rating, index) in userRatings" :key="index" class="performance-rating">
        <PerformanceMeter
          :color="rating.color"
          :strokeOffset="rating.strokeOffset"
          :itemRating="rating.itemRating"
        />
      </div>
    </div>
    <div class="user-vote-status">
      Pro
      <div><i class="fas fa-fingerprint"></i></div>
    </div>
    <div class="grades">
      8.00
    </div>
  </div>
</template>

<script>
import PerformanceMeter from '@/components/ui/PerformanceMeter';

export default {
  name: 'UserVotes',
  components: {
    PerformanceMeter,
  },
  data() {
    return {
      userRatings: [
        { color: 'blue', strokeOffset: '30', itemRating: '7' },
        { color: 'orange', strokeOffset: '10', itemRating: '8' },
        { color: 'red', strokeOffset: '40', itemRating: '5' },
        { color: '#4a9179', strokeOffset: '10', itemRating: '8' },
      ],
    };
  },
};
</script>

<style scoped>
.user-votes-image {
  text-align: center;
}
.user-votes-image img {
  width: 50px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
}
.performance-rating {
  display: inline-block;
}
.user-vote{
  display: grid;
  padding: 20px;
  grid-template-columns: 0.5fr 1.5fr 2fr 0.4fr 0.5fr;
  grid-gap: 10px;
  border: 2px solid #f4f7f6;
  height: initial;
  border-right: 0px;
  border-left: 0px;
}
.voting-grades {
  text-align: right;
  padding-top: 5px;
}
.user-vote-status {
  text-align: center;
  border: 1px solid rgba(224, 224, 224, 0.5);

}
.grades {
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
}
.user-vote-location {
  color: #48c5b6;
}
</style>
