<template>
  <div class="comment">
    <div class="comment__username">{{ comment?.user?.login }}</div>
    <div class="comment__text">{{ comment.title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;

  &__username {
    font-weight: 700;
    margin-right: 10px;
  }
}
</style>
