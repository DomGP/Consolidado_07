<template>
    <div class="text-center">
        <v-dialog
        width="800px"
        :value="dialog"
        >
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            Formulario
            </v-card-title>
                <form-comp/>
            <v-card-actions>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Form from '@/components/nuevaClase/Form.vue'
export default {
    name: 'modal-comp',
    props: {
        dialog: {
            type:Boolean,
            required:true, 
        },
    },
    data: function(){
        return {
        
        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'form-comp': Form
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
