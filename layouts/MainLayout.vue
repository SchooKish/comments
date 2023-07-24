<template>
  <section class="layout">
    <div class="layout__wrap">
      <div class="layout__bar">
        <NuxtLink class="layout__bar-link" to="/">
          MealHub
        </NuxtLink>

        <NuxtLink class="layout__bar-link" to="/comments">
          Comments
        </NuxtLink>
      </div>

      <div class="layout__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped lang="scss">
  .layout {
    height: 100vh;
    background: url("~/assets/img/bg.jpg") no-repeat;
    background-size: cover;


    &__bar {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
      background-color: #7918f2;
      color: #fff;
    }

    &__bar-link {
      text-decoration: none;
      color: #fff;
      transition: .3s;

      &:hover {
        color: #cc0cdb;
        transition: .3s;
      }
    }

    &__wrap {
      height: 100%;
      backdrop-filter: brightness(50%);
      display: grid;
      grid-template-rows: 50px auto;
    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>
