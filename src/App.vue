<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from './pages/ContentBlock';
import Footer from './components/Footer';
import {mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    ContentBlock,
    Footer
  },
  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },
  methods:{
    ...mapMutations({
      updateFilterUsers: "filters/updateFilterUsers"
    }),
  },
  created() {
    this.updateFilterUsers()
  }
};
</script>
