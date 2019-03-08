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
        <!-- NOOOOO -->
        <tile :item="tiles[i*rows + j]" @tileClick="onTileClick"></tile>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from "./Tile"

export default {
  name: "Grid1",
  components: { Tile },
  props: {
    rows: {
      type: Number,
      required: true
    },
    columns: {
      type: Number,
      required: true
    },
    tiles: {
      type: Array,
      required: true
    },
    
  },
  data() {
    return {
      display: 0,
      openTiles: []
    }
  },
  methods: {
    // NOOOOO
    canOpen(tile) {
      return this.openTiles.length < 2;
    },
    resetOpenTiles() {
      this.openTiles = [];
    },
    checkWin() {
      let toRet = true;
      this.tiles.forEach(tile => {
        if(tile.canUpdate) {
          toRet = false;
        }
      })
      return toRet;
    },
    checkIfEqual() {
      // NOOOOO
      const first = this.openTiles[0];
      const second = this.openTiles[1];
      if(first.value === second.value) {
        this.setTileUpdate(first, false);
        this.setTileUpdate(second, false);
      } else {
        this.setTileState(first, 'COPERTA');
        this.setTileState(second, 'COPERTA');
      }
      this.resetOpenTiles()
      const win = this.checkWin();
      if(win) {
        alert("HAI VINTOOOOOO");
      }
    },
    setTileState(tile, newState) {
      (this.tiles.filter(item => item.id === tile.id)[0]).state = newState;
    },
    setTileUpdate(tile, newUpdate) {
      (this.tiles.filter(item => item.id === tile.id)[0]).canUpdate = newUpdate;
    },
    // NOOOOO
    addToOpenTiles(tile) {
      this.openTiles.push(tile);
      if(this.openTiles.length === 2) {
        this.checkIfEqual();
      }
    },
    removeFromOpenTiles(tile) {
      let index = -1;
      this.openTiles.forEach((item, i) => {
        if(item.id === tile.id) {
          index = i;
        }
      })
      this.openTiles.splice(index, 1);
    },
    onTileClick(myTile) {
      this.tiles.forEach(tile => {
        if(tile.id === myTile.id) {
          if(tile.state === 'COPERTA' && this.canOpen() && tile.canUpdate) {
            tile.state = 'SCOPERTA';
            this.addToOpenTiles(tile);
          } else if(tile.state === 'SCOPERTA' && tile.canUpdate) {
            tile.state = 'COPERTA';
            this.removeFromOpenTiles(tile);
          }
        }
      })
    }
  }
}
</script>