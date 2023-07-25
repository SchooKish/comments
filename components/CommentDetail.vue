<template>
  <div class="comment">
    <p class="comment__title">ID:</p>
    <p>{{ comment.id }}</p>
    <p class="comment__title">Post ID:</p>
    <p>{{comment.postId}}</p>
    <p class="comment__title">Name:</p>
    <p>{{comment.name}}</p>
    <p class="comment__title">E-mail:</p>
    <p>{{comment.email}}</p>
    <p class="comment__title">Comment:</p>
    <p>{{comment.body}}</p>
  </div>
</template>

<script>
export default {
  name: "CommentDetail",
  data() {
    return {
      comment: {},
    }
  },

  mounted() {
    this.getComment();
  },
  methods: {
    async getComment() {
      const id = this.$route.params.id;
      await this.$axios.get(`/comments/${id}`).then(res => {
        this.comment = res.data;
      });
    },
  }
}
</script>

<style scoped lang="scss">
.comment {
  background-color: #7918f2;
  width: 500px;
  padding: 20px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 100px auto;
  row-gap: 15px;

  &__title {
    font-weight: 600;
  }

  & p {
    color: #fff;
  }
}
</style>
