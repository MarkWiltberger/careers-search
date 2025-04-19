<template>
  <div>My accordion</div>
</template>

<script>
export default {
  name: "CollapsibleAccordion",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
