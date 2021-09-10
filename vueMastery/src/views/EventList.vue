<template>
<h1>Events for Good</h1>
  <div class="events">
    <event-card v-for='event in events' :key="event.id" :event="event"></event-card>
  </div>
</template>

<script>
// @ is an alias to /src

import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService.js'
export default {
  name: "Home",
  data: function(){
    return {
    events: null 
    }
  },
  created: function() {
    EventService.getEvents()
    .then(response =>{this.events = response.data ; console.log(this.events)})
    .catch(error => {console.log(error)})
    
  },
  components: {
    EventCard
  }
};
</script>
<style lang="css" scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
