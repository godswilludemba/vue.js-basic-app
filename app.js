const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Your actual course goal here",
      courseGoalB: "on the Master Class of vue!",

      vueLinks: "https://vuejs.org",
    };
  },
  methods: {
    calcNumber() {
      const randNumber = Math.random();
      if (randNumber > 0.3) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
