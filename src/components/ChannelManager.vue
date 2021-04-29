<template>
  <div class="px-2">
    <h1 class="mb-2 px-2 font-semibold text-lg text-left header">Channels</h1>
    <card>
      <add-channel
        :options="draftChannelOptions"
        v-model.trim="addValue"
        @add="handleAdd"
        @create="handleCreate"/>

      <channels-list
        :channels="draftChannels"
        @remove="handleRemove"
        @reorder="handleReorder" />

      <template v-slot:footer v-if="showControlButtons">
        <secondary-button class="mx-2" @click="handleCancel" test-id="cancel-btn">Cancel</secondary-button>
        <primary-button @click="handleApply" test-id="cancel-btn">Apply</primary-button>
      </template>
    </card>
  </div>
</template>

<script>
  import { getRandomIcon } from '../constants/icons'
  import { defaultChannelOptions } from '../constants/defaultChannelOptions'
  import AddChannel from './AddChannel'
  import ChannelsList from './ChannelsList'

  export default {
    name: 'ChannelManager',

    components: {
      AddChannel,
      ChannelsList
    },

    data() {
      return {
        showControlButtons: false,
        draftChannelOptions: [...defaultChannelOptions],
        channelOptions: [...defaultChannelOptions],
        draftChannels: [],
        channels: [],
        addValue: ''
      }
    },

    methods: {
      handleAdd(channel) {
        this.draftChannels.push(channel)
        this.showControlButtons = true
      },
      handleCreate(channelLabel) {
        const existingOption = this.draftChannelOptions.find(({ label }) => label.toLowerCase() === channelLabel.toLowerCase())
        this.showControlButtons = true

        if (existingOption) {
          this.draftChannels.push(existingOption)
        } else {
          const icon = getRandomIcon()
          const newOption = { label: channelLabel, icon }

          this.draftChannelOptions.push(newOption)
          this.draftChannels.push(newOption)
        }
      },
      handleRemove(label) {
        this.draftChannels = this.draftChannels.filter(channel => channel.label !== label)
        this.showControlButtons = true
      },
      handleReorder(channels) {
        this.draftChannels = channels
        this.showControlButtons = true
      },
      handleApply() {
        this.channels = [...this.draftChannels]
        this.channelOptions = [...this.draftChannelOptions]
        this.showControlButtons = false
      },
      handleCancel() {
        this.draftChannels = [...this.channels]
        this.draftChannelOptions = [...this.channelOptions]
        this.showControlButtons = false
      }
    }
  }
</script>

<style>
  .header {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5);
  }
</style>
