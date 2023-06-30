<template>
    <div>
        <h1>Edición</h1>
        <formEdicion-comp :curso='curso'/>
    </div>
</template>

<script>
import FormEdicion from '@/components/editarClase/FormEdicion.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'edicion-view',
    props: {
        id:{
            type:String,
            required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['getCursoById']),
        curso(){
            return this.getCursoById(this.id)
        }
    },
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