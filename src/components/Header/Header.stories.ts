import { Header } from "./";

export default {
  title: "Header",
  components: {
    Header,
  },
};

export const defaultView = () => ({
  components: {
    Header,
  },
  template: `<Header avatarUrl="https://i.pravatar.cc/300"/>`,
});
