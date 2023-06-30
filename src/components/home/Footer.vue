<template>
    <v-footer 
    color="cyan lighten-2"
    dense
    dark
    class="footer">
        <v-col
        class="text-center"
        cols="12"
        ><v-btn icon><v-icon class="icon">mdi-facebook</v-icon></v-btn>
        <v-btn icon><v-icon class="icon">mdi-instagram</v-icon></v-btn>
        <v-btn icon><v-icon class="icon">mdi-twitter</v-icon></v-btn>
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
    .icon{
        margin:0px 5px;
        padding-top: 0; /* Ajusta el espacio superior */
        padding-bottom:0; /* Ajusta el espacio inferior */
    }
    .footer{
        padding-top: 0; /* Ajusta el espacio superior */
        padding-bottom:0; /* Ajusta el espacio inferior */
    }
</style>