<template>
  <!-- <sidebar-menu :menu="menu" /> -->
  <sidebar-menu @toggle-collapse="onToggleCollapse" @item-click="onItemClick">
    <div slot="header">header</div>
    <div slot="footer">footer</div>
    <span slot="toggle-icon"></span>
    <span slot="dropdown-icon">dropdown-icon</span>
  </sidebar-menu>
</template>
 
 <script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            onToggleCollapse(collapsed) {},
            onItemClick(event, item) {}
        }
    }
</script> 
   