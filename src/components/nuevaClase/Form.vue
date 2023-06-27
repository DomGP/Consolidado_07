<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="form"
    >
        <v-text-field
        v-model="nombre"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
        ></v-text-field>

        <v-text-field
        v-model="img"
        label="URL de la imagen"
        required
        ></v-text-field>

        <v-text-field
        v-model="cupos"
        :rules="nameRules"
        label="Cupos del curso"
        required
        ></v-text-field>

        <v-text-field
        v-model="inscritos"
        :rules="nameRules"
        label="Inscritos en el curso"
        required
        ></v-text-field>

        <v-text-field
        v-model="duracion"
        :rules="nameRules"
        label="Duración del curso"
        required
        ></v-text-field>

        <v-text-field
        v-model="fecha_registro"
        :rules="nameRules"
        label="Fecha de registro"
        required
        ></v-text-field>

        <v-text-field
        v-model="costo"
        :rules="nameRules"
        label="Costo del curso"
        required
        ></v-text-field>

        <v-textarea
        v-model="descripcion"
        outlined
        label="Descripción del Curso"
        required
        ></v-textarea>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="add"
        >
        Agregar
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="limpiar"
        >
        Limpiar Formulario
        </v-btn>

        <v-btn
        color="warning"
        @click="cerrar"
        >
        Cancelar
        </v-btn>
    </v-form>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
    name:'form-comp',
    //props:{}    
    data: () => ({
        valid: true,
        nombre: '',
        img:'',
        cupos:'',
        inscritos:'',
        duracion:'',
        fecha_registro:'',
        costo:'',
        descripcion:'',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        modalOpen: true,
        }),

    methods: {
        ...mapActions(['addClass']),
        add () {
            let valid = true
            if(valid){
                let curso={
                    nombre:this.nombre,
                    img:this.img,
                    cupos:parseInt(this.cupos),
                    inscritos:parseInt(this.inscritos),
                    duracion:this.duracion,
                    fecha_registro:this.fecha_registro,
                    costo:this.costo,
                    descripcion:this.descripcion,
                }
                this.addClass(curso)
            }
        },
        limpiar () {
            this.$refs.form.reset()
        },
        cerrar () {
            this.$emit('close');
        },
    },
    // computed: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
    
</script>

<style scoped>
    .form{
        margin:10px;
    }
</style>
