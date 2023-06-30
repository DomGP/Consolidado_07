<template>
  <v-container>
    <h1 class="text-decoration-underline">Lista de Cursos</h1>
    <v-row justify="center">
      <v-card 
      class="card"
      width="400" 
      elevation="20"
      v-for="curso in cursos"
      :key="curso.id">
        <v-img
        class="img mx-auto d-block"
          height="150px"
          width="150px"
          :src="curso.img"
        >
        </v-img>
        <v-card-title class="white--text mt-8">
            <p class="titulo ml-3">
              {{curso.nombre}}
            </p>
          </v-card-title>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Información
          </div>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
            small
            color="deep-purple darken-3"
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Costo: </strong> {{ curso.costo }}
                </div>
                <div>
                  <strong>Duración: </strong>{{curso.duracion}}</div>
              </div>  
            </v-timeline-item>
            <v-timeline-item
            small
            color="pink darken-3"
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Cupos: </strong> {{curso.cupos}}
                </div>
                <div>
                  <strong>Completado: </strong> {{curso.completado ? 'Sí' : 'No' }}</div>
              </div>
              
            </v-timeline-item>
            <v-timeline-item
            small
            color="deep-purple darken-3"
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Fecha de Registro </strong>
                </div>
                <div>{{curso.fecha_registro}}</div>
              </div>
              
            </v-timeline-item>
            <v-timeline-item
            small
            color="pink darken-3"
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Descrpción: </strong>
                </div>
                <div class="desc">{{curso.descripcion}}</div>
              </div>
              
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'home-view',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(['cursos'])
  },
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  .titulo{
    color:black;
  }
  h1{
    text-align: center;
    margin-bottom: 10px;
    font-size: 40px;
    color:black
    /* color:white; */
  }
  .card{
    margin:30px 30px;
    border-radius: 30px;
    /* background: lightgrey; */
    }
  .img{
    margin-top:20px;
    
  }
  .desc{
    text-align: justify;
  }
</style>