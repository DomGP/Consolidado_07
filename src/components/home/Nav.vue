<template>
    <div>
        <v-app-bar
        color="pink darken-3"
        dark
        dense
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon @click="$router.push('/')">mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon @click="$router.push('/administracion')">mdi-wrench</v-icon>
        </v-btn>
        <v-menu
            left
            bottom
        >
        </v-menu>
        </v-app-bar>


        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="pink--text text--accent-4"
            >
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-wrench</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Administración</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Nav-comp',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
        }
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