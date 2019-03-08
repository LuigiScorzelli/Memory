<template>
  <div class="tile notification is-success" @click="onClick">
    <p v-if="item.state === 'SCOPERTA'"> {{ item.value }} </p>
  </div>
  
</template>

<script>

export default {
  name: 'Tile',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("tileClick", this.item);
    }
  }
}
</script>

