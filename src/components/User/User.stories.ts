import { User } from "./";
export default {
  title: "User",
  components: {
    User,
  },
};
export const defaultView = () => ({
  components: {
    User,
  },
  template: `
    <User username="User Name" avatarUrl="https://i.pravatar.cc/300" />
    `,
});
defaultView.storyName = "Стандартный вид";

export const storiesView = () => ({
  components: {
    User,
  },
  template: `
    <User username="User Name" avatarUrl="https://i.pravatar.cc/300" vClass="stories" />
    `,
});
storiesView.storyName = "Лента";

export const postsView = () => ({
  components: {
    User,
  },
  template: `
    <User username="User Name" avatarUrl="https://i.pravatar.cc/300" vClass="posts" />
    `,
});
postsView.storyName = "Запись";
