<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      <v-col
          cols="12"
          md="4"
      >
        <Filters/>
      </v-col>
      <v-col
          cols="12"
          md="4"
      >
        <Users v-if="users.length"/>
        <p v-else class="alt-text">нет результатов</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "@/components/Filters";
import Users from "@/components/Users";
import {mapState} from "vuex";

export default {
  name: 'ContentBlock',
  components: {Users, Filters},
  computed: {
    ...mapState({
      users: state => state.filters.filterUsers
    })
  },
  data: () => ({
    variant: 'default',
  }),
}
</script>
<style scoped lang="scss">
.alt-text {
  font-weight: bold;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.4);
}
</style>
