<template>
    <div>
        <h2>JOUST IN CASE</h2>
        <save-dialog @closeDialog="createJouster" :showDialog="showCreateJousterDialog"></save-dialog>
        <md-button class="md-primary md-raised" @click="showCreateJousterDialog = true">Create Jouster</md-button>
        <md-button class="md-primary md-raised" @click="registerPoints">Register points</md-button>
        
        <md-table>
            <md-table-row>
                <md-table-head>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Points</md-table-head>
            </md-table-row>
            <md-table-row v-for="jouster in jousters" :key="jouster.id">
                <md-table-cell>{{jouster.id}}</md-table-cell>
                <md-table-cell>{{jouster.name}}</md-table-cell>
                <md-table-cell>{{jouster.points}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
import axios from "axios";
import SaveDialog from './SaveDialog.vue';

export default {
  data: () => ({
    jousters: null,
    showCreateJousterDialog: false,
    name: null
  }),

components: {
    SaveDialog
},

methods: {
    createJouster(value) {
      
      this.showCreateJousterDialog = !this.showCreateJousterDialog;
      if(value){
        let name = value.name;
        axios.post("http://localhost:8080/jousters", null, {params: {name}})
      }
    },
    registerPoints: function() {
      //TODO: Create Dialog with the register point logic
    },
    getJousters: async function() {
        this.jousters = await (await axios.get("http://localhost:8080/jousters")).data;
    }
  },

  async created() {
    this.getJousters();
  },
};
</script>

<style>
    .md-table .md-table-cell.md-has-action .md-table-cell-container {
    justify-content: space-around;
    }
    .md-table .md-table-head {
    text-align: left;
    }
    .md-table .md-table-cell {
    text-align: left;
    }
</style>
