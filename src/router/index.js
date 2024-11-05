import AppLayout from '@/layout/AppLayout.vue';
import Layout from '@/layout/User/Layout.vue';
import AgentLayout from '@/layout/Agent/AgentLayout.vue';
import Landing from '@/views/pages/Landing.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Landing,
            children: [
                {
                    path: '/',
                    name: 'landing',
                    component: () => import('@/views/pages/Landing.vue')
                },
                
            ]
        },

        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/user/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/user/Dashboard.vue')
                },
                {
                    path: '/user/messages',
                    name: 'messages',
                    component: () => import('@/views/user/Chat.vue')
                },
                {
                    path: '/user/settings',
                    name: 'user-settings',
                    component: () => import('@/views/user/Setting.vue')
                }
                
            ]
        },

        {
            path: '/',
            component: AgentLayout,
            children: [
                {
                    path: '/agent/dashboard',
                    name: 'dashboards',
                    component: () => import('@/views/agent/Dashboard.vue')
                },
                {
                    path: '/agent/history',
                    name: 'historys',
                    component: () => import('@/views/agent/History.vue')
                },
                {
                    path: '/agent/message',
                    name: 'messagess',
                    component: () => import('@/views/agent/Chat.vue')
                },
                {
                    path: '/agent/settings',
                    name: 'settingss',
                    component: () => import('@/views/agent/Setting.vue')
                },
                {
                    path: '/agent/scanner',
                    name: 'scanner',
                    component: () => import('@/views/agent/Scan.vue')
                },
                {
                    path: '/agent/create-account',
                    name: 'create-account',
                    component: () => import('@/views/agent/NewCustomer.vue')
                },
                {
                    path: '/agent/payment',
                    name: 'payment',
                    component: () => import('@/views/agent/Payment.vue')
                }
                
                
            ]
        },



        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/views/dashboard',
                    name: 'dashboardss',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/admin/settings',
                    name: 'settings',
                    component: () => import('@/views/admin/Setting.vue')
                },
                

                {
                    path: '/admin/Customer/add-customer',
                    name: 'add-customer',
                    component: () => import('@/views/admin/Customer/AddCustomer.vue')
                },
                {
                    path: '/admin/Customer/active-customer',
                    name: 'active-customer',
                    component: () => import('@/views/admin/Customer/ActiveCustomer.vue')
                },
                {
                    path: '/admin/Customer/inactive-customer',
                    name: 'inactive-customer',
                    component: () => import('@/views/admin/Customer/InactiveCustomer.vue')
                },
                
                {
                    path: '/admin/add-staff',
                    name: 'addstaff',
                    component: () => import('@/views/admin/AddStaff.vue')
                },
        
                {
                    path: '/admin/add-agent',
                    name: 'addagent',
                    component: () => import('@/views/admin/AddAgent.vue')
                },
                {
                    path: '/admin/add-inventory',
                    name: 'inventory',
                    component: () => import('@/views/admin/AddInventory.vue')
                },
                {
                    path: '/admin/container-loan',
                    name: 'container-loan',
                    component: () => import('@/views/admin/Containerloan.vue')
                },
                {
                    path: '/admin/sales',
                    name: 'sales',
                    component: () => import('@/views/admin/Sales.vue')
                },

                {
                    path: '/admin/message',
                    name: 'message',
                    component: () => import('@/views/admin/Chat.vue')
                },
        
                {
                    path: '/admin/reports',
                    name: 'reports',
                    component: () => import('@/views/admin/Reports.vue')
                },
                {
                    path: '/admin/area',
                    name: 'area',
                    component: () => import('@/views/admin/Area.vue')
                },
        
        
                
            ]
        },
        
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        }
    ]
});

export default router;
