<template>
  <div class="thread">
    <h1>This is the title: {{ title }}</h1>
    <p>...</p>
  </div>
</template>

<script>
export default {
  name: "Thread",
  data() {
    return {
      title: this.$route.params.id
    };
  }
};
</script>
