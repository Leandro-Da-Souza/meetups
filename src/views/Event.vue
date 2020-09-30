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
            cols="40"
            rows="10"
            v-model="review"
            placeholder="Write something..."
          ></textarea>
          <button>Add Review</button>
        </div>
      </form>
    </div>

    <div class="reviews" v-if="eventReview !== ''">
      <ul>
        <li v-for="review in eventReview" :key="review.id">
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    let review = ref("");
    let eventReview = ref("");
    let event;

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
      let reviewData = {
        id: route.params.id,
        review: review.value,
      };

      store.commit("SET_MY_REVIEWS", reviewData);

      review.value = "";
      window.scrollTo(0, document.body.scrollHeight);
    };

    watch(storeReviews.value, () => {
      eventReview.value = storeReviews.value.filter(
        (item) => item.id === route.params.id
      );
    });

    return {
      event: event.value[0],
      imgSrc,
      review,
      addReview,
      eventReview,
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
  margin: 15px;
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

.reviews ul {
  list-style-type: none;
}

.reviews li p {
  font-size: 1.2rem;
}
</style>