<template>
    <div class="notfound">
        <h2></h2>
    </div>
</template>

<script>
export default {
    name: 'NotFound-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
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
    .notfound{
        background-image:url('@/assets/notfound.png') ;
        background-size:cover;
        background-attachment: fixed;
        height: 100%;
    }
</style>