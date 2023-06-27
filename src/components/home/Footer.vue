<template>
    <v-footer 
    color="pink darken-3"
    dense
    dark>
        <v-col
        class="text-center"
        cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'footer-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>