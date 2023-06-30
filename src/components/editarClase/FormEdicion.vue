<template>
    <div>
        <v-card>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="form"
            >
                <v-text-field
                v-model="form.nombre"
                :counter="20"
                :rules="nameRules"
                label="Nombre"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.img"
                label="URL de la imagen"
                :rules="imgRules"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.cupos"
                :rules="cuposRules"
                label="Cupos del curso"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.inscritos"
                :rules="inscritosRules"
                :error-messages="inscritosError"
                label="Inscritos en el curso"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.duracion"
                :rules="duracionRules"
                label="Duración del curso"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.fecha_registro"
                label="Fecha de registro"
                disabled
                ></v-text-field>

                <v-text-field
                v-model="form.costo"
                :rules="costoRules"
                label="Costo del curso"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.completado"
                :rules="completadoRules"
                :error-messages="inscritosError2"
                label="Completado"
                required
                ></v-text-field>

                <v-textarea
                v-model="form.descripcion"
                :rules="descripcionRules"
                outlined
                label="Descripción del Curso"
                required
                ></v-textarea>

                <v-btn
                color="success"
                class="mr-4"
                @click="edit"
                >
                Aceptar
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
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </div>     
</template>

<script>
    export default {
    name:'formEdicion-comp',
    props:{
        curso:{
            type:Object,
            required:true
        }
    },    
    data: () => ({
        valid: true,
        form:{
            nombre: '',
            img:'',
            cupos:'',
            inscritos:'',
            duracion:'',
            fecha_registro:'',
            costo:'',
            descripcion:'',
            completado:'',
            },
        inscritosError: '',
        inscritosError2: '',
        nameRules: [
            (v) => !!v || 'Nombre es requerido',
            (v) => (v && v.length <= 20) || 'Name must be less than 10 characters',
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
        completadoRules: [(v) => !!v || 'Terminación es requerida'],
        }),

    methods: {
        edit () {
            if (this.$refs.form.validate()) {
            if (parseInt(this.form.inscritos) > parseInt(this.form.cupos)) {
          // Mostrar error de inscritos superiores a cupos
            this.inscritosError = 'La cantidad de inscritos no puede ser mayor que la cantidad de cupos disponibles.';
            
        } else {
            if (this.form.completado === 'true') {
                this.form.completado = true;
            } else if (this.form.completado === 'false') {
                this.form.completado = false;
            } else {
                // Mostrar error si el valor ingresado no es "true" o "false"
                this.inscritosError2 = 'Ingrese solo "true" o "false"';
                return;
            }
            Object.assign(this.curso, {
            nombre: this.form.nombre,
            img: this.form.img,
            cupos: parseInt(this.form.cupos),
            inscritos: this.form.completado ? 0 : parseInt(this.form.inscritos),
            duracion: this.form.duracion,
            fecha_registro: this.form.fecha_registro,
            costo: parseInt(this.form.costo),
            descripcion: this.form.descripcion,
            completado: this.form.completado
            });
            this.$router.push('/administracion')
            }
        }
    },
        limpiar () {
            this.$refs.form.resetValidation();
            this.form.nombre = "";
            this.form.img = "";
            this.form.cupos = "";
            this.form.inscritos = "";
            this.form.duracion = "";
            this.form.costo = "";
            this.form.descripcion = "";
            this.form.inscritosError = ''; // Limpiar el mensaje de error de inscritos
    },
        cerrar () {
            this.$emit('close');
            this.dialog=false
            this.$router.push('/administracion')
        },
        obtenerFechaActual(){
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const anio = fechaActual.getFullYear();

            //Cambiar formato
            const fechaNueva = `${this.agregarCeroIzquierda(dia)}/${this.agregarCeroIzquierda(mes)}/${anio}`

            this.form.fecha_registro = fechaNueva;
        },
        agregarCeroIzquierda(valor) {
            return valor < 10 ? `0${valor}` : valor;
        },
    },
    computed: {
        

    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.obtenerFechaActual();
        this.form=this.curso
    },
    // -- End Lifecycle Methods
}
    
</script>

<style scoped>
    .form{
        margin:10px 500px;
    }
</style>