<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
    };
  },
  created() {
    this.changeTitle();
  },
  methods: {
    changeTitle() {
      setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
      }, 3000);
    },
  },
};
</script>
