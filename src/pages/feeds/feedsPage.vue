<template>
  <Topline>
    <template #headline>
      <Header v-if="user" :avatarUrl="user.avatar_url"></Header>
    </template>
    <template #content>
      <Swiper
        class="stories__swiper"
        :freeMode="true"
        :slides-per-view="'auto'"
        :space-between="0"
        :modules="modules"
      >
        <SwiperSlide
          class="stories__item"
          v-for="(user, i) in trandPost.data"
          :key="user.id"
        >
          <User
            @click="routeTo(i)"
            :username="user.owner.login"
            :avatarUrl="user.owner.avatar_url"
            vClass="stories"
          />
        </SwiperSlide>
      </Swiper>
    </template>
  </Topline>

  <div class="repositories__section">
    <ul class="repositories__list">
      <li
        class="repositories__item"
        v-for="item in starredRepos"
        :key="item.id"
      >
        <PostItem
          :postData="getFeedData(item).postData"
          :issues="item.issues ? item.issues : []"
          @getIssue="
            getIssues({
              id: item.id,
              owner: item.owner.login,
              repo: item.name,
            })
          "
        >
          <template #repository>
            <Repository
              :repositoryData="getFeedData(item).repositoryData"
              @removeStar="
                () => {
                  removeStar(item.id), getTrandRepo();
                }
              "
              :status="true"
            />
          </template>
        </PostItem>
      </li>
    </ul>
  </div>
</template>

<script>
import { Topline } from "../../components/topline";
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { PostItem } from "../../components/PostItem";
import { Repository } from "../../components/Repository";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";

import { mapState, mapActions, mapGetters } from "vuex";

import { addDateNames } from "../../api/Helpers";
import "swiper/css";
import "swiper/css/free-mode";

export default {
  name: "feeds",
  components: {
    Topline,
    Header,
    User,
    PostItem,
    Repository,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode],
    };
  },
  computed: {
    ...mapState({
      trandPost: (state) => state.trandings.trandPost,
      user: (state) => state.auth.user,
      issuesLoading: (state) => state.auth.loading,
      starredRepos: (state) => state.starred.starredRepos,
    }),
    ...mapGetters({
      getUnstarredRepo: "getUnstarredRepo",
    }),
  },
  methods: {
    ...mapActions({
      getTrandRepo: "trandings/getTrandRepo",
      getUserData: "auth/getUserData",
      getStarredRepo: "starred/getStarredRepo",
      getIssues: "starred/getIssues",
      removeStar: "starred/removeStar",
    }),
    getFeedData(item) {
      return {
        postData: {
          username: item.owner.login,
          userUrl: item.owner.html_url,
          avatarUrl: item.owner.avatar_url,
          postDate: addDateNames(item.created_at),
        },
        repositoryData: {
          title: item.name,
          text: item.description,
          postUrl: item.html_url,
          stats: {
            stars: item.stargazers_count,
            forks: item.forks,
          },
        },
      };
    },
    routeTo(index) {
      this.$router.push({
        name: "stories",
        params: {
          openedSlide: index,
        },
      });
    },
  },
  async created() {
    if (this.user === null) {
      await this.getUserData();
    }
  },
  async mounted() {
    await this.getStarredRepo();
    this.getTrandRepo();
  },
};
</script>

<style lang="scss">
.swiper-slide {
  width: auto;
}

.stories__swiper {
  padding: 0 0 40px 0;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .stories__item .user {
    flex-direction: column;
  }
}

.repositories__section {
  max-width: 1000px;
  width: 100%;
  padding: 0 10px;
  padding: 32px;
  margin: 0 auto;

  .repositories__list {
    flex-direction: column;

    .repositories__item {
      margin-bottom: 25px;

      &.--preloader {
        width: 80%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        border-radius: 20px;
        background-color: rgb(151, 151, 151);
      }
    }
  }
}
</style>
