<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="form"
    >
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
        ></v-text-field>

        <v-text-field
        v-model="URL"
        :rules="nameRules"
        label="URL de la imagen"
        required
        ></v-text-field>

        <v-text-field
        v-model="cupos"
        :rules="nameRules"
        label="Cupos del curso"
        type="number"
        required
        ></v-text-field>

        <v-text-field
        v-model="inscritos"
        :rules="nameRules"
        label="Inscritos en el curso"
        type="number"
        required
        ></v-text-field>

        <v-text-field
        v-model="duracion"
        :rules="nameRules"
        label="Duración del curso"
        required
        ></v-text-field>

        <v-text-field
        v-model="fecha"
        :rules="nameRules"
        label="Fecha de registro"
        required
        ></v-text-field>

        <v-text-field
        v-model="costo"
        :rules="nameRules"
        label="Costo del curso"
        type="number"
        required
        ></v-text-field>

        <v-textarea
        outlined
        label="Descripción del Curso"
        required
        ></v-textarea>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Agregar
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Limpiar Formulario
        </v-btn>

        <v-btn
        color="warning"
        @click="resetValidation"
        >
        Cancelar
        </v-btn>
  </v-form>
</template>

<script>
    export default {
    name:'formEdicion-comp',
    //props:{}    
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        }),

    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
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
        margin:10px 500px;
    }
</style>