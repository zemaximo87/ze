<template>
    <main>
        {{sobre.title}}
        {{sobre.description}}
    </main>    
</template>

<script>
    import local from '@/sources/data.js';

    export default{
        name: 'About',
        data(){
        return{
            sobre: []
        }
    },
    mounted(){
        local.get('/about.json').then(response => {
           this.sobre = response.data[0];                     
        });
        }
    }

</script>

<style scoped>
    main{
        background-color: var(--color-background-home);
        justify-content: center;    
        align-items: center;
    }
    .text-top{
        color:var(--color-text-light);
        font-size:22px;
        margin-bottom: 20px;
     }
    .text-bottom{
        color:var(--color-text-light);
        font-size:18px;
        margin-top:20px;
    }
    #subscribe{
        width: 340px;
    }
    @media (min-width: 700px){
     #subscribe{
        width: 370px;
     }
    }
</style>