<template>
    <main>
        <div class="text-top">
            Aqui é nois no Vue

           
                <p v-for="user in users" :key="user.index"> {{user.name}} </p>
           
        </div>

        <a href="#" target="_blank">
            <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="go to" id="subscribe" />
        </a>

        <div class="text-bottom">
           bora pra mais uma linguagem front da porra!!!
        </div>
    </main>    
</template>

<script>
    import local from '@/sources/data.js';

    export default{
        name: 'Home',
        data(){
        return{
            users: []
        }
    },
    mounted(){
        local.get('/users.json').then(response => {
           this.users = response.data;       
           console.log(response.data);   
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