<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
        <v-card>
            <v-card-title class="text-h5">
            Borrar
            </v-card-title>
            <v-card-text>¿Estás seguro que desea eliminar la clase?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red darken-2" text @click="cancelDelete">Cancelar</v-btn>
            <v-btn color="green darken-1" text @click="confirmDelete">Aceptar</v-btn>
    
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'borrar-comp',
    // props: {},
    data: function(){
        return {
            dialog:false
        }
    },
    // computed: {},
    methods: {
        cancelDelete: function() {
            this.$emit("cancel");
            },
        confirmDelete: function() {
            this.$emit("confirm");
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