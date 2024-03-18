import { Repository } from "./";

export default {
  title: "Repository",
  components: {
    Repository,
  },
};

export const defaultView = () => ({
  components: {
    Repository,
  },
  data() {
    return {
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
  template: `<Repository :repositoryData="repositoryData" />`,
});
