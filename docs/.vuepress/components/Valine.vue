<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
    mounted() {
        this.renderValine();
    },
    methods: {
        renderValine(){
            if(typeof window !== 'undefined'){
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');
            const secretKey = require('../../../config/secretKey.js')
            new Valine({
                el: '#vcomments',
                appId: secretKey.appId,
                appKey: secretKey.appKey,
                notify:false,
                verify:false,
                avatar:'retro',
                placeholder:'有问题，请给我留言。'
            });
        }
    }
}
        
</script>