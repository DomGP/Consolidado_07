<template>
    <div>
        <h1>Edición</h1>
        <formEdicion-comp/>
    </div>
</template>

<script>
import FormEdicion from '@/components/editarClase/FormEdicion.vue'
export default {
    name: 'edicion-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'formEdicion-comp':FormEdicion
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    h1{
        margin-top:20px ;
        text-align: center;
    }
</style>