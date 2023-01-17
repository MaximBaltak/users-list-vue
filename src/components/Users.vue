<template>
  <v-card
      max-width="450"
      class="mx-auto"
      style="{position: relative}"
  >
    <v-subheader
        v-if="titleUserList"
        :key="titleUserList"
        v-text="titleUserList"
    ></v-subheader>
    <transition-group name="list" tag="v-list">
      <template v-for="(item, index) in users">
        <v-divider
            v-if="item.divider"
            :key="index"
            :inset="item.inset"
        ></v-divider>

        <v-list-item
            v-if="item.title"
            :key="item.title"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{on,attrs}">
              <v-list-item-avatar v-on="on" v-bind="attrs">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </template>
            <p class="ma-0">{{ item.address }}</p>
          </v-tooltip>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </transition-group>
    <Progress v-if="loader" :size="100" color="primary"/>
  </v-card>
</template>

<script>
import {mapState} from "vuex";
import Progress from "@/components/Progress";

export default {
  name: "Users",
  components: {Progress},
  computed: {
    ...mapState({
      users: state => state.filters.filterUsers,
      titleUserList: state => state.users.titleUser,
      loader: state => state.filters.loader
    })
  },
}
</script>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.list-leave-active {
  position: absolute;
}

</style>
