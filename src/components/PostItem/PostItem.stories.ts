import { PostItem } from "./";
import { Repository } from "../Repository";

export default {
  title: "PostItem",
  components: {
    PostItem,
    Repository,
  },
};

export const defaultView = () => ({
  components: {
    PostItem,
    Repository,
  },
  data() {
    return {
      postData: {
        username: "username",
        avatarUrl: "https://i.pravatar.cc/300",
        postDate: "19 November",
      },
      repositoryData: {
        title: "Vue.js",
        text: "JavaScript framework for building interactive web applications ⚡",
        stats: {
          stars: 36,
          forks: 9,
        },
      },
    };
  },
  template: `
    <ul class="posts__list">
        <li class="posts__item" v-for="i in 1" :key="i">
            <PostItem :postData="postData">
                <template #repository>
                    <Repository :repositoryData="repositoryData" />
                </template>
            </PostItem>
        </li>
    </ul>
    `,
});
defaultView.story = {
  name: "Стандартное отображение",
};
