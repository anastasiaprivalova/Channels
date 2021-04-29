<template>
  <div class="relative mb-3" v-click-outside="clickedOutside">
    <span
      :style="{pointerEvents: 'none'}"
      class="absolute inset-y-0 left-0 px-2 flex items-center">
      <fa-icon icon="search" class="text-gray-400" />
    </span>
    <input
      :value="value"
      @input="handleInput"
      @keyup.enter="handleCreate"
      placeholder="Add channel"
      ref="input"
      tabindex="0"
      class="min-w-full text-sm border border-gray-300 py-1 pl-8 pr-5 rounded-full focus:outline-none focus:shadow-outline"
      test-id="add-input" />
    <span
      v-if="value"
      @click.prevent="reset()"
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
      x
    </span>
    <div
      v-show="value && showOptions"
      @click.self="handleSelf()"
      @focusout="showOptions = false"
      tabindex="0"
      class="absolute right-0 left-0 z-50 bg-white border border-gray-300 mt-1 mh-70 overflow-hidden overflow-y-scroll rounded-md shadow-md">
      <ul class="py-1" test-id="add-options">
        <li
          v-for="(item, index) in searchResults"
          :key="index"
          :test-id="`${item.label}-option`"
          @click="handleClick(item)"
          class="px-3 py-2 text-sm cursor-pointer hover:bg-gray-200">
            <fa-icon :icon="item.icon" />
            {{ item.label }}
        </li>
        <li v-if="!searchResults.length" class="px-3 py-2 text-center" test-id="no-results">
          No Results
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddChannel',

    props: {
      value: {
        type: String,
        required: false,
      },
      options: {
        type: Array,
        required: true,
      },
    },

    data() {
      return {
        showOptions: false,
        chosenOption: '',
        searchTerm: '',
      };
    },

    computed: {
      searchResults() {
        return this.options.filter((item) => {
          return item.label.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      },
    },

    methods: {
      reset() {
        this.$emit('input', '')
        this.chosenOption = ''
      },

      handleInput(evt) {
        const value = evt.target.value

        this.$emit('input', value)
        this.searchTerm = value
        this.showOptions = true
      },

      handleClick(item) {
        this.$emit('add', item)
        this.reset()
        this.showOptions = false
        this.$refs.input.focus()
      },

      handleCreate(evt) {
        this.$emit('create', evt.target.value)
        this.reset()
        this.showOptions = false
        this.$refs.input.focus()
      },

      clickedOutside() {
        this.showOptions = false
      },
    },
  };
</script>
