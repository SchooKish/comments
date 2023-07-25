<template>
  <div class="banner">
    MealHub Test
    <NuxtLink
      class="banner__link"
      to="/comments"
    >
      Go to comments
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "MainBanner"
}
</script>

<style scoped lang="scss">
.banner {
  width: 500px;
  height: 150px;
  background-color: #7918f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  border-radius: 16px;

  &__link {
    text-decoration: none;
    color: #fff;
    transition: .3s;

    &:hover {
      color: #cc0cdb;
      transition: .3s;
    }
  }
}
</style>
