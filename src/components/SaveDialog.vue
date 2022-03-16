<template>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Save Jouster</md-dialog-title>
      <md-field>
          <label>Jouster Name</label>
          <md-input id="textArea" v-model="name"/>
      </md-field>
      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('closeDialog')">Close</md-button>
        <md-button id="saveButton" class="md-primary" @click="$emit('closeDialog', { name })">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>
<script>
export default {
  props: ['showDialog'],
  emits: ['closeDialog'],
  data: () => ({
      name: null
  })
}
</script>
<style scoped>
    .md-dialog /deep/.md-dialog-container {
        min-width: 25em;
    }
    .md-field {
        align-self: center;
        max-width: 20em;
    }
</style>