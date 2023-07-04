<template>
    <div class="text-center">
        <v-dialog
        :value="dialog"
        width="500"
        >

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            Borrar Clase
            {{curso}}
            </v-card-title>

            <v-card-text>
                <br>
            ¿Está seguro que desea eliminar la clase?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="success"
                dark
                @click="deleteClass"
            >
                Aceptar
            </v-btn>
            <v-btn
                color="error"
                dark
                @click="$emit('close')"
            >
                Cancelar
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'borrar-comp',
    props: {
        curso: {
            type: Number,
            required: true,
    },
        dialog:{
            type: Boolean,
            required: true
        }
    },
    data: function(){
        return {
            /* dialog:false, */

        }
    },
    // computed: {},
    methods: {
        ...mapActions(['removeClass']),

        deleteClass() {
        this.removeClass(this.curso);
        this.$emit('close')
    },
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