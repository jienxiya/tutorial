<template>
  <sidebar-menu :menu="menu" />
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
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '#',
                        title: 'Personal Information',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '#',
                        title: 'Add Course & Subjects',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Edit'
                            }
                        ]
                    },
                    {
                        href: '#',
                        title: 'Log Out',
                        icon: 'fa fa-chart-area',
                        // logout();
                    }
                ]
            }
        },
        methods:{
            // onToggleCollapse(collapsed) {},
            // onItemClick(event, item) {}
        }
    }
</script> 
   