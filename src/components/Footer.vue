<template>
    <footer>
        <a target="_blank" class="social-link" 
        v-for="(socialLink,index) in socialLinks" :key="index"
        :href="socialLink.links">
            <img :alt="socialLink.label" :title="socialLink.label" :src="socialLink.icon" />
        </a>
    </footer>
</template>

<script>
import api from '@/sources/api.js';

export default{
    name:'Footer',
    data(){
        return{
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(response => {
           this.socialLinks = response.data;
        });
    }
}
</script>

<style scoped>
    footer{
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .social-link{
        border:1px solid var(--color-text-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:50%;
        width: 40px;
        height: 40px;

    }
    .social-link img{
        width:20px;
    }
</style>
