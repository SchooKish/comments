<template>
  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>E-mail</th>
    </tr>
    </thead>

    <tbody>
    <tr
      class="table__rows"
      v-for="com in getPaginated"
      :key="com.id"
      @click="goToDetail(com.id)"
    >
      <td>{{ com.id }}</td>
      <td>{{ com.name }}</td>
      <td>{{ com.email }}</td>
    </tr>

    <tr>
      <td colspan="3">
        <div class="table__pagination">
          <button @click="goToPage(1)">First</button>

          <button
            class="table__pagination-arrow table__pagination-arrow--prev"
            @click="previousPage"
          >
            <img src="~/assets/icons/arrow.svg" alt="prev">
          </button>

          <button
            v-for="btn in getButtons"
            :key="btn"
            :class="{'table__pagination--active': btn === currentPage}"
            @click="goToPage(btn)"
          >
            {{ btn }}
          </button>

          <button
            class="table__pagination-arrow"
            @click="nextPage"
          >
            <img src="~/assets/icons/arrow.svg" alt="next">
          </button>

          <button @click="goToPage(getTotalPages)">Last</button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CommentsTable",
  data() {
    return {
      comments: [],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },

  mounted() {
    this.getComments();
  },

  methods: {
    async getComments() {
      await this.$axios.get('/comments').then(res => {
        this.comments = res.data;
      });
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },

    nextPage() {
      if (this.currentPage < this.getTotalPages) {
        this.currentPage += 1;
      }
    },

    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    goToDetail(id) {
      this.$router.push(`/comments/${id}`);
    }
  },

  computed: {
    getButtons() {
      const middlePage = this.currentPage;
      const startPage = Math.max(middlePage - 2, 1);
      const endPage = Math.min(startPage + 4, this.getTotalPages);
      return Array(endPage - startPage + 1).fill().map((_, i) => startPage + i);
    },

    getTotalPages() {
      return Math.ceil(this.comments.length / this.itemsPerPage);
    },

    getPaginated() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.comments.slice(startIndex, endIndex);
    },
  }
}
</script>

<style lang="scss">
.table {
  background: #7918f2;
  background: linear-gradient(-68deg, #ac32e4, #4801ff);
  border-collapse: collapse;
  border-radius: 16px;
  overflow: hidden;
  width: 60%;

  & th, & td {
    padding: 15px 20px;
    text-align: left;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
  }

  & th {
    background-color: rgba(255, 255, 255, .3);
  }

  &__rows:hover {
    background-color: rgba(255, 255, 255, .2);
    cursor: pointer;
  }

  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &--active {
      background-color: #f15ae0 !important;
    }

    & button {
      border: none;
      padding: 5px 10px;
      border-radius: 8px;
      min-height: 26px;
      background-color: #cc0cdb;
      cursor: pointer;
      color: #fff;
    }
  }

  &__pagination-arrow {
    display: flex;
    align-items: center;
    padding: 0 !important;

    &--prev > img {
      transform: rotate(180deg);
    }
  }
}
</style>
