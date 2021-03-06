<script>
export default {
  name: "autocomplete",

  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: 0,
      filter: ""
    };
  },

  methods: {
    onChange() {
      let filter = this.filter.toLowerCase();
      this.$store.dispatch({ type: "setFilter", filter });
      this.$store.dispatch({ type: "loadFilter", filter });

      // When the data will be given by an outside ajax request -
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {
      this.results = this.items.filter(item => {
        return item.toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
      });
    },
    setResult(result) {
      this.filter = result;
      this.isOpen = false;

      let filter = this.filter;
      this.$store.dispatch({ type: "setFilter", filter });
      this.$store.dispatch({ type: "loadFilter", filter });
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.filter = this.results[this.arrowCounter];
      let filter = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
      this.$store.dispatch({ type: "setFilter", filter });
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<template>
  <div class="autocomplete">
    <input
      type="text"
      @input="onChange"
      v-model="filter"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      placeholder="search..."
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Loading results...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  /* height: 120px; */
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #f6f7fa;
}

input {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: 12px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  margin: 10px;
}

input:focus {
  outline: none;
}
</style>