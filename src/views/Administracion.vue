<template>
    <v-container>
        <h1 class="text-decoration-underline">Administración</h1>
        <v-row justify="center">
            <v-col cols="12" sm="10">
                <modal-comp @close='dialog=false' :dialog='dialog'/>
                <v-simple-table class="table">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Curso
                        </th>
                        <th class="text-left">
                            Cupos
                        </th>
                        <th class="text-left">
                            Inscritos
                        </th>
                        <th class="text-left">
                            Duración
                        </th>
                        <th class="text-left">
                            Costo
                        </th>
                        <th class="text-left">
                            Terminado
                        </th>
                        <th class="text-left">
                            Fecha
                        </th>
                        <th class="text-left">
                            Acciones
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(curso,index) in cursos"
                        :key="index"
                        >
                        <td>{{ curso.nombre }}</td>
                        <td>{{ curso.cupos }}</td>
                        <td>{{ curso.inscritos }}</td>
                        <td>{{ curso.duracion }}</td>
                        <td><div class="td-style">${{ curso.costo }}</div></td>
                        <td><div :class="{'success-color': curso.completado, 'error-color': !curso.completado}">{{ curso.completado ? 'Sí' : 'No'  }}</div></td>
                        <td><div class="td-style">{{ curso.fecha_registro }}</div></td>
                        <td>
                            <v-btn icon color="amber darken-1"
                            @click="redirect(curso.id)"><v-icon>mdi-pencil</v-icon></v-btn>
        
                            <v-btn 
                            icon 
                            color="red darken-2"
                            @click="openDialog(index)">
                            <v-icon>mdi-delete</v-icon>
                            </v-btn>                       
                        </td>
                        </tr>      
                    </tbody>
                    </template>
                </v-simple-table>
                <br>
                <div>
                    <v-alert
                        dense
                        outlined
                        shaped
                        color="purple darken-1"
                        class="alert"
                    >
                    <v-icon color="purple darken-1">mdi-account-multiple</v-icon>
                    Cantidad total de alumnos permitidos: <strong>{{countTotalCupos}}</strong> alumnos.</v-alert>
                    <v-alert
                        dense
                        outlined
                        shaped
                        color="blue darken-1"
                    >
                    <v-icon color="blue darken-1">mdi-account-check</v-icon>
                    Cantidad total de alumnos inscritos: <strong>{{countTotalInscritos}}</strong> alumnos. </v-alert>
                    <v-alert
                        dense
                        outlined
                        shaped
                        color="red darken-1"
                    >
                    <v-icon color="red darken-1">mdi-account-plus</v-icon>
                    Cantidad total de cupos restantes: <strong>{{countTotalCuposDisponibles}}</strong> alumnos.</v-alert>
                    <v-alert
                        dense
                        outlined
                        shaped
                        color="pink darken-1"
                    >
                    <v-icon color="pink darken-1">mdi-cancel</v-icon>
                    Cantidad total de cursos terminados: <strong>{{countCursosNoTerminados}}</strong> cursos.</v-alert>
                    <v-alert
                        dense
                        outlined
                        shaped
                        color="lime darken-4"
                        >
                        <v-icon color="lime darken-4">mdi-bell-ring-outline</v-icon>
                        Cantidad total de cursos activos: <strong>{{countCursosTerminados}}</strong> cursos.</v-alert>
                        <v-alert
                        dense
                        outlined
                        shaped
                        color="orange darken-1"
                        >
                        <v-icon color="orange darken-1">mdi-bell-ring</v-icon>
                        Cantidad total de cursos: <strong>{{countCursos}}</strong> cursos.</v-alert>
                </div>
            </v-col>
        </v-row>
        <borrar-comp icon :dialog="dialog" :curso="deleteIndex" @close="dialog=false"/>
    </v-container>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import Modal from '@/components/nuevaClase/Modal.vue'
import BorrarClase from '@/components/borrarClase/BorrarClase.vue'
export default {
    name: 'adm-view',
    // props: {},
    data: function(){
        return {
            dialog:false,
            deleteIndex:-1
        }
    },
    computed: {
        ...mapState(['cursos']),
        ...mapGetters(['countCursos','countTotalCupos','countTotalInscritos','countTotalCuposDisponibles','countCursosTerminados','countCursosNoTerminados'])
    },
    methods: {
        ...mapActions(['removeClass']),
        /* confirmDelete(curso){
            if(confirm('¿Estás seguro que deseas eliminar este curso?'))
            this.removeClass(curso.nombre);
        }, */
        redirect(id){
            console.log(id)
            this.$router.push(`/administracion/${id}`)
        },
        openDialog(index){
            this.deleteIndex=index
            this.dialog=true

        }
    },
    // watch: {},
    components: {
        'modal-comp': Modal,
        'borrar-comp': BorrarClase
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom: 10px;
        font-size: 40px;
        color:black;
    }
    .td-style{
        background: #00E676;
        color:white;
        text-align: center;
        padding: 5px 0;
        border-radius:60px ;
        min-width: 60px;
        max-width:90px;
    }
    .success-color {
        background: #40C4FF; /* Color para el caso 'si' */
        color:white;
        text-align: center;
        padding: 5px 0;
        border-radius:60px;
        max-width:40px;
    }
    .error-color {
        background: #BDBDBD; /* Color para el caso 'no' */
        color:white;
        text-align: center;
        padding: 5px 0;
        border-radius:60px ;
        max-width:40px;
    }
    .table{
        border-radius: 10px;
    }
</style>