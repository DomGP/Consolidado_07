<template>
    <div>
        <v-app-bar
        color="cyan lighten-2"
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
            active-class="cyan--text text--accent-4"
            >
            <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)">
                <v-list-item-icon>
                <v-icon>{{route.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{route.title}}</v-list-item-title>
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
            routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'home'
                },
                {
                    icon:'mdi-wrench',
                    title:'Administración',
                    name:'administracion'
                },
            ]
        }
    },
    computed: {
        currentName(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(nameRoute){
            if(this.currentName == nameRoute) return

            this.$router.push({name:nameRoute})
        }
    }
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