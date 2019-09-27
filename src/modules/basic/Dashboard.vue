<template>
    <div>
        <h1> Hello!</h1>
        <sideBar id="sidebar">
            <div slot="header">header</div>
            <div slot="footer">footer</div>
            <span  class="vsm--toggle-btn" :class="{'vsm--toggle-btn_slot' : $slots['toggle-icon']}"
            @click="onToggleClick">toggle-icon</span>
        </sideBar>
    </div>
</template>
<script>
import sideBar from 'components/frame/sidebar.vue'
export default {
    name: "sideBar",
    data(){
        return{

        }
    },
    component:{
        sideBar
    },
    methods:{
        onToggleClick () {
        this.unsetMobileItem()
        this.isCollapsed = !this.isCollapsed
        this.$emit('toggle-collapse', this.isCollapsed)
    }
}
}
</script>