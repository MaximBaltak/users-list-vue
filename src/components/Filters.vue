<template>
  <div>
    <v-select
        v-model="country"
        :items="countryFilterOptions"
        clearable
        label="Filter by country"
    ></v-select>
    <v-select
        v-model="score"
        :items="scoreFilterOptions"
        clearable
        label="Filter by score"
    ></v-select>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "Filters",
  computed: {
    ...mapState({
      scoreFilterOptions: state => state.filters.scoreFilterOptions,
      countryFilterOptions: state => state.filters.countryFilterOptions,
      filters: state => state.filters.filters
    }),
    country: {
      get() {
        return this.filters.country
      },
      set(value) {
        this.updateFilterCountry(value)
        this.updateUsers()
      }
    },
    score: {
      get() {
        return this.filters.score
      },
      set(value) {
        this.updateFilterScore(value)
        this.updateUsers()
      }
    },
  },
  methods: {
    ...mapMutations({
      updateUsers: "filters/updateFilterUsers",
      updateFilterScore: "filters/updateFilterScore",
      updateFilterCountry: "filters/updateFilterCountry"
    })
  }
}
</script>

<style scoped>

</style>
