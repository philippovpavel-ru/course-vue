<template>
  <header class="header">
    <button class="header__logo" @click="$router.push({ name: 'feedsPage' })">
      <Icon name="Logo" />
    </button>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <button
            class="header__btn"
            @click="$router.push({ name: 'feedsPage' })"
          >
            <Icon name="Home" />
          </button>
        </li>
        <li class="header__nav-item">
          <button
            class="header__btn header__btn--avatar"
            @click="$router.push({ name: 'repositories' })"
          >
            <Avatar :avatarUrl="avatarUrl" />
          </button>
        </li>
        <li class="header__nav-item">
          <button class="header__btn" @click="logoutUser">
            <Icon name="Exit" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Icon } from "../icons";
import { Avatar } from "../Avatar";
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {
    Icon,
    Avatar,
  },
  methods: {
    ...mapActions({
      logoutUser: "auth/logoutUser",
    }),
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;

  &__logo {
    width: 175px;
    color: #292929;
    @media (max-width: 376px) {
      width: 100px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__nav {
    &-list {
      display: flex;
      gap: 25px;
    }

    &-item:hover {
      opacity: 0.7;
    }
  }

  &__btn {
    width: 40px;
    height: 40px;
  }
}
</style>
