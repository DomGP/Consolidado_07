<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="800px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="blue lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
                class="addClass"
                >
            Agregar Curso
                </v-btn>
            </template>
            <div>
                <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                Formulario
                </v-card-title>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="form"
                    >
                        <v-text-field
                        v-model="nombre"
                        :counter="50"
                        :rules="nameRules"
                        label="Nombre"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="img"
                        label="URL de la imagen"
                        :rules="imgRules"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="cupos"
                        :rules="cuposRules"
                        label="Cupos del curso"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="inscritos"
                        :rules="inscritosRules"
                        :error-messages="inscritosError"
                        label="Inscritos en el curso"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="duracion"
                        :rules="duracionRules"
                        label="Duración del curso"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="fecha_registro"
                        label="Fecha de registro"
                        disabled
                        ></v-text-field>

                        <v-text-field
                        v-model="costo"
                        :rules="costoRules"
                        label="Costo del curso"
                        required
                        ></v-text-field>

                        <v-textarea
                        v-model="descripcion"
                        :rules="descripcionRules"
                        outlined
                        label="Descripción del Curso"
                        required
                        ></v-textarea>

                        <v-btn
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
                        @click="dialog = false"
                        >
                        Cancelar
                        </v-btn>
                    </v-form>  
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
            </div>     
        </v-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'modal-comp',
    props: {
        /* dialog: {
            type:Boolean,
            required:true, 
        }, */
    },
    data: function(){
        return {
            dialog: false,
            valid: true,
            nombre: '',
            img:'',
            cupos:'',
            inscritos:'',
            duracion:'',
            fecha_registro:'',
            costo:'',
            descripcion:'',
            inscritosError: '',
            nameRules: [
            (v) => !!v || 'Nombre es requerido',
            (v) => (v && v.length <= 50) || 'Name must be less than 10 characters',
            ],
            imgRules:[(v) => !!v || 'URL es requerida'],
            cuposRules:[(v) => !!v || 'Cupo es requerida',
            (v) => (v === '' || parseInt(v) >= 0) || 'La cantidad de cupos debe ser un número mayor o igual a cero',
            ],
            inscritosRules:[(v) => !!v || 'Inscritos es requerida',
            (v) => (v === '' || parseInt(v) >= 0) || 'La cantidad de inscritos debe ser un número mayor o igual a cero',],
            duracionRules:[(v) => !!v || 'Duración es requerida'],
            costoRules:[(v) => !!v || 'Costo es requerido',
            (v) => (v === '' || parseInt(v) >= 0) || 'El costo debe ser un número mayor o igual a cero',],
            descripcionRules: [(v) => !!v || 'Descripción es requerida'],
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['addClass']),
        add () {
            if (this.$refs.form.validate()) {
                if (parseInt(this.inscritos) > parseInt(this.cupos)) {
                    // Mostrar error de inscritos superiores a cupos
                this.inscritosError = 'La cantidad de inscritos no puede ser mayor que la cantidad de cupos disponibles.';
        } else {
            let curso = {
            nombre: this.nombre,
            img: this.img,
            cupos: parseInt(this.cupos),
            inscritos: parseInt(this.inscritos),
            duracion: this.duracion,
            fecha_registro: this.fecha_registro,
            costo: parseInt(this.costo),
            descripcion: this.descripcion,
            };
            this.addClass(curso);
            this.dialog = false;

            }
        }
    },
        limpiar () {
            this.$refs.form.resetValidation();
            this.nombre = "";
            this.img = "";
            this.cupos = "";
            this.inscritos = "";
            this.duracion = "";
            this.costo = "";
            this.descripcion = "";
            this.inscritosError = ''; // Limpiar el mensaje de error de inscritos
    },
        cerrar () {
            this.$emit('close');
        },
        obtenerFechaActual(){
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const anio = fechaActual.getFullYear();

            //Cambiar formato
            const fechaNueva = `${this.agregarCeroIzquierda(dia)}/${this.agregarCeroIzquierda(mes)}/${anio}`

            this.fecha_registro = fechaNueva;
        },
        agregarCeroIzquierda(valor) {
            return valor < 10 ? `0${valor}` : valor;
        },
        
    },
    // watch: {},
    components: {
        /* 'form-comp': Form */
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.obtenerFechaActual();
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .addClass{
        border-radius: 20px;
        margin-bottom:10px ;
    }
    .form{
        margin:10px 20px;
    }
</style>
