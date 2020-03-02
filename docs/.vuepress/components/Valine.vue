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
            new Valine({
                el: '#vcomments',
                appId: 'UwLx06GMin2cFiqrqvQvHKVs-gzGzoHsz',
                appKey: '6jUwEKRzTBjT5m0o7QSHDWr8',
                notify:false,
                verify:false,
                avatar:'retro',
                placeholder:'有问题，请给我留言。'
            });
        }
    }
}
        
</script>