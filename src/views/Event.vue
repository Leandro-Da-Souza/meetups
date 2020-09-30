<template>
  <div class="event">
    <div class="wrapper">
      <h2>{{ event.title }}</h2>
      <img :src="imgSrc" alt="" />
      <h2>{{ event.location }}</h2>
      <span>{{ event.date }}</span>
    </div>

    <div class="form">
      <form @submit.prevent="addReview">
        <div class="form-group">
          <h2 for="Write A Review">Write A Review</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="review"
          ></textarea>
          <button>Add Review</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    let review = ref("");
    let event;
    let reviewData;

    let storeReviews = computed(() => store.state.reviews);

    const dbComingEvents = computed(() => store.state.comingEvents);
    const dbPastEvents = computed(() => store.state.pastEvents);

    let allEvents = Array.from(dbComingEvents.value);
    dbPastEvents.value.forEach((event) => {
      allEvents.push(event);
    });

    event = computed(() =>
      allEvents.filter((item) => {
        return item.id == route.params.id;
      })
    );
    let imgSrc = `http://placeimg.com/400/300/${event.value[0].category}`;

    const addReview = () => {
      reviewData = {
        id: route.params.id,
        review: review.value,
      };

      storeReviews.value.forEach((item) => {
        if (item.id === reviewData.id) {
          store.commit("UPDATE_MY_REVIEW", reviewData);
        } else {
          store.commit("SET_MY_REVIEWS", reviewData);
        }
      });

      console.log(storeReviews.value);
    };

    return {
      event: event.value[0],
      imgSrc,
      review,
      addReview,
    };
  },
};
</script>

<style scoped>
img {
  width: 90%;
  height: 90%;
}

.event {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.form-group textarea {
  margin: 5px 0px;
  background-color: #feecee;
  color: #333;
}

.form-group button {
  padding: 10px 15px;
  width: 100%;
  margin-top: 5px;
  box-shadow: 4px 5px 3px 0px rgba(0, 0, 0, 0.75);
}
</style>