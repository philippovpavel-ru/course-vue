<template>
  <div class="controls">
    <button class="btn" @click="$emit('removeStar')">
      <div class="btn__icon star" :class="[{ starred }]">
        <Icon name="Star" />
      </div>
      <div class="btn__title">Star</div>
    </button>
    <div class="btn__count">{{ repoStats.stars }}</div>
    <button class="btn">
      <div class="btn__icon fork">
        <Icon name="Fork" />
      </div>
      <div class="btn__title">Fork</div>
    </button>
    <div class="btn__count">{{ repoStats.forks }}</div>
  </div>
</template>

<script lang="ts">
import { Icon } from "../icons";

export default {
  name: "Controls",
  components: {
    Icon,
  },
  emits: ["removeStar"],
  props: {
    repoStats: {
      type: Object,
      required: true,
    },
    starred: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #1b1f232a;

  .btn {
    display: flex;
    align-items: center;
    height: 100%;
    color: #24292e;
    padding: 0 10px;
    border-right: 1px solid #1b1f232a;
    border-left: 1px solid #1b1f232a;

    &__icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    &__count {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 5px;
      border-right: 1px solid #1b1f232a;

      &:last-child {
        border-right: none;
      }
    }

    &:first-child {
      border-left: none;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
