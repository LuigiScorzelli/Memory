<template>
  <div>
    <div 
      class="columns"
      v-for="(row, i) in rows"
      :key="i"
    >
      <div 
        class="column"
        v-for="(column, j) in columns"
        :key="j"
      >
        <tile @tileClick="onTileClick(i, j)">
          <template slot="content">
            {{ contents[(i * rows) + j]["value"] }}
          </template>
        </tile>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from "./Tile"

export default {
  name: 'Grid',
  components: { Tile },
  props: {
    rows: {
      type: Number,
      required: true
    },
     columns: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      contents: [
        {
          id: 1,
          value: "red",
        },
        {
          id: 2,
          value: "black"
        },
        {
          id: 3,
          value: "red"
        },
        {
          id: 4, 
          value: "black"
        }
      ],
      selected: [],
      countClick: 0
    }
  },
  methods: {
    toggleColumn(i, j) {
      let compair = []
      let toRet = {
        i: i,
        j: j,
        value: this.contents[(i * this.rows) + j]["value"],
        code: i.toString() + j.toString()
      }
      
      this.selected.push(toRet);
      this.countClick ++
      
      if(this.selected.length > 0) {
        for(let i = 0; i < this.selected.length; i++) {
          let item = this.selected[i];
          if(!compair.includes(item.value) && !compair.includes(item.code)) {
            compair.push(item.value);
            compair.push(item.code);
          } else if(compair.includes(item.value) && compair.includes(item.code)) {
            console.log("errore");
            this.countClick = 0;
          } else if(this.countClick && compair.length === 2) {
            console.log("ok");
            this.countClick = 0;
          } 
          
          if(this.countClick === 2 && compair.length === 4) {
            this.countClick = 0;
          }
          console.log(this.countClick);
        }
      }
    },
    onTileClick(i, j) {
      this.toggleColumn(i, j);
    }
  }
}
</script>
