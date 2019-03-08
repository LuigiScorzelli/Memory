<template>
  <div class="container">
    <div class="section">
       <grid :rows="2" :columns="2" :tiles="tiles">
       </grid>
    </div>
  </div>
</template>

<script>
import Grid from "../components/Grid1"

export default {
  name: 'Memory',
  components: { Grid },
   data() {
    return {
      tiles: [
        {
          id: 1,
          value: "red",
          state: "COPERTA",
          canUpdate: true
        },
        {
          id: 2,
          value: "black",
          state: "COPERTA",
          canUpdate: true
        },
        {
          id: 3,
          value: "red",
          state: "COPERTA",
          canUpdate: true
        },
        {
          id: 4, 
          value: "black",
          state: "COPERTA",
          canUpdate: true
        }
      ],
    }
  },
}
</script>

