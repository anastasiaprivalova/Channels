<template>
 <draggable
    class="list-group"
    tag="ul"
    v-model="channelsList"
    v-bind="dragOptions"
    @start="isDragging = true"
    @end="isDragging = false"
    @change="handleMove">
    <transition-group type="transition" name="flip-list">
      <li v-for="channel in channelsList" :key="channel.label" class="flex p-2" :test-id="`${channel.label}-channel`">
        <div class="flex-1">
          <fa-icon icon="grip-vertical" class="list-group-item-move-icon text-gray-300" />
          <span class="p-2 mx-2 bg-galaxy-100 rounded">
            <fa-icon :icon="channel.icon" class="text-galaxy-800" />
          </span>
          <span>{{channel.label}}</span>
          </div>
        <inline-button @click="handleRemove(channel.label)">Remove</inline-button>
      </li>
    </transition-group>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'ChannelsList',

    props: {
      channels: {
        type: Array,
        required: true
      }
    },

    components: {
      draggable
    },

    methods: {
      handleRemove(label) {
        this.$emit('remove', label)
      },
      handleMove(changes) {
        const moved = changes?.moved

        if (moved) {
          const { oldIndex, newIndex } = moved
          
          const reorderedChannels = [
            ...this.channels.slice(0, oldIndex),
            ...this.channels.slice(oldIndex + 1)
          ];

          reorderedChannels.splice(newIndex, 0, this.channels[oldIndex])

          this.$emit('reorder', reorderedChannels)
        }
      }
    },

    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost'
        };
      },
      
      channelsList: {
        get() {
          return [...this.channels]
        },
        set(newChannels) {
          return newChannels
        }
      }
    }
  }
</script>

<style>
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #e5e5e5;
  }
  .list-group {
    height: 200px;
    overflow: auto;
  }
  .list-group-item-move-icon {
    cursor: move;
  }
</style>