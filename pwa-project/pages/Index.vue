<template>
  <div>
    <div>
      <img class="logo" src="/static/img/strongwave.png" alt="logo">
    </div>
    <div class="content">
      <router-link to="/gosurf" class="gosurf">Going Surfing</router-link>
      <router-link to="/ask" class="ask">Ask a Coach</router-link>
      <router-link to="/browse" class="browse">Browse/Search</router-link>
      <router-link to="/course" class="course">Courses</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "Go Surfing",
    showMenu: true,
    showBack: true,
    showLogo: false,
    actions: [
      {
        icon: "search",
        route: "/search"
      }
    ]
  });
}

export default {
  name: "index",
  async asyncData({ store, route }) {
    setState(store);
  },
  activated() {
    setState(this.$store);
  }
};
</script>

<style lang="stylus" scoped>
.content {
  display: grid;
  grid-auto-rows: minmax(120px, auto);
  font-size: 20px;
  line-height: 120px;
  color: #ffffff;

  /* unvisited link */
  a:link {
    color: #ffffff;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }
}

.logo {
  height: auto;
  padding: 35px;
}

.gosurf {
  background-color: #616882;
}

.ask {
  background-color: #2d4e5f;
}

.browse {
  background-color: #4ba2ab;
}

.course {
  background-color: #333333;
}
</style>
