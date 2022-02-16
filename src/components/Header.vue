<template>
    <header>
        <nav class="container">
            <a href="/"><img alt="ze" id="logo" src="../assets/1589932084887.jpg" /></a>

            <img v-on:click="openMenu" alt="button" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" />

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-itens" :class="{active:menuActive}">

                <a href="/"><img alt="ze" id="menu-logo" src="../assets/1589932084887.jpg" /></a>

                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="/videos">Vídeos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>

        </nav>
    </header>    
</template>

<script>
export default{
    name: 'Header',
    data(){
        return {
            menuActive: false
        }
    },
    methods:{
        openMenu:function(){
            this.menuActive = true;
        },
        closeMenu:function(){
            this.menuActive = false;
        }
    }
}
</script>

<style scopded>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
       width: 56px;
       border-radius: 100%;
    }
    #menu-button{
        width:30px
    }
    #menu-overlay{
        position: fixed;
        top:0;
        left:0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }
    #menu-logo{
       width: 130px;
       margin-top: 40px;
    }
    #menu-itens{
        position: fixed;
        top:0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display:none;
        flex-direction: column;     
        justify-content: flex-start;   
        align-items: center;
    }
    #menu-itens.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: center;
    } 
    ul li{
        margin:20px 0;
    }    
    ul li a{
        color: var(--color-text-light);
    }
    @media (min-width: 700px){
        #menu-logo,
        #menu-button,
        #menu-overlay{
            display: none;
        }
        #menu-itens{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }
        ul{
            display: flex;  
            height: 60px;
            align-items: center;
            }
         ul li{
             margin:0;
             margin-left:20px;
         }
    }
</style>