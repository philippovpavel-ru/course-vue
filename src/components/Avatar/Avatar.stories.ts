import { Avatar } from "./";
export default {
  title: "Avatar",
  components: {
    Avatar,
  },
};

export const defaultView = () => ({
  components: {
    Avatar,
  },
  template: `
    <Avatar avatarUrl="https://i.pravatar.cc/300" />
    `,
});
defaultView.story = {
  name: "Стандартный вид",
};

export const storiesView = () => ({
  components: {
    Avatar,
  },
  template: `
  <Avatar vClass="stories" avatarUrl="https://i.pravatar.cc/300" />
  `,
});
storiesView.story = {
  name: "Имеется сторис",
};

export const postsView = () => ({
  components: {
    Avatar,
  },
  template: `
  <Avatar vClass="posts" avatarUrl="https://i.pravatar.cc/300" />
  `,
});
postsView.story = {
  name: "В посте",
};
