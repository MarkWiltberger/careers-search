<template>
  <section>
    <h1 class="ml-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2>Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        build: this.action === "Build",
        create: this.action === "Create",
        design: this.action === "Design",
        code: this.action === "Code",
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionsIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionsIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
