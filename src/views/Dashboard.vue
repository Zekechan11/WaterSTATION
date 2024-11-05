<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, onMounted } from 'vue';

const products = ref();

const { getPrimary, getSurface, isDarkTheme } = useLayout();

onMounted(() => {
    products.value = [
        { name: 'Zeke', category: 'Gudalupe', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Jemar', category: 'Malingin', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Edison', category: 'Nailon', status: 'delayed', profileImage: '/demo/images/user.jpg' },
        { name: 'Leonardo', category: 'Siocon', status: 'ongoing', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
        { name: 'Joe', category: 'Odlot', status: 'complete', profileImage: '/demo/images/user.jpg' },
    ];
});

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
]);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
</script>



<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
            <div class="card mb-0 shadow-md">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">TOTAL CUSTOMERS</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">500</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border"
                        style="width: 5rem; height: 5rem">
                        <i class="pi pi-users text-orange-500 !text-4xl"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
            <div class="card mb-0 shadow-md">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">NEW CUSTOMERS</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">100</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border"
                        style="width: 5rem; height: 5rem">
                        <i class="pi pi-users text-cyan-500 !text-4xl"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
            <div class="card mb-0 shadow-md">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">MONTHLY SALES</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">20,000</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border"
                        style="width: 5rem; height: 5rem">
                        <i class="pi pi-paypal text-purple-500 !text-4xl"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 xl:col-span-8">
            <div class="card shadow-md" style="background-color: #fbfcfc;">
                <div class="font-semibold text-xl">AGENTS</div>
                <!-- Add a wrapper for scrollable table -->
                <div style="max-height: 400px; overflow-y: auto;"> <!-- Set your desired height here -->
                    <DataTable :value="products" resizableColumns columnResizeMode="fit" showGridlines
                        tableStyle="min-width: 50rem" class="mt-4">
                        <Column header="Name">
                            <template #body="slotProps">
                                <div class="flex items-center">
                                    <img :src="slotProps.data.profileImage" alt="Profile"
                                        class="w-8 h-8 object-cover rounded-full mr-2" />
                                    {{ slotProps.data.name }}
                                </div>
                            </template>
                        </Column>
                        <Column field="category" header="Area"></Column>
                        <Column header="Status">
                            <template #body="slotProps">
                                <span :class="{
                                    'bg-green-500 text-white font-semibold rounded py-1 px-2': slotProps.data.status === 'complete',
                                    'bg-yellow-500 text-white font-semibold rounded py-1 px-2': slotProps.data.status === 'delayed',
                                    'bg-blue-500 text-white font-semibold rounded py-1 px-2': slotProps.data.status === 'ongoing'
                                }">
                                    {{
                                        slotProps.data.status === 'complete' ? 'Complete' :
                                            slotProps.data.status === 'delayed' ? 'Delayed' : 'Ongoing'
                                    }}
                                </span>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>


        <div class="col-span-12 xl:col-span-4">
            <div class="card shadow-md" style="background-color: #fbfcfc;">
                <div class="flex items-center justify-between mb-6">
                    <div class="font-semibold text-xl">SCHEDULES</div>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                            @click="$refs.menu1.toggle($event)"></Button>
                        <Menu ref="menu1" :popup="true" :model="items" class="!min-w-40"></Menu>
                    </div>
                </div>

                <ul class="p-0 mx-0 mt-0 mb-6 list-none">
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-blue-200 p-2 rounded w-full text-xl">Monday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-orange-200 p-2 rounded w-full text-xl">Tuesday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-blue-200 p-2 rounded w-full text-xl">Wednesday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-orange-200 p-2 rounded w-full text-xl">Thursday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-blue-200 p-2 rounded w-full text-xl">Friday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                    <li class="flex items-center py-2">
                        <span
                            class="text-surface-900 dark:text-surface-0 leading-normal bg-orange-200 p-2 rounded w-full text-xl">Saturday
                            - Cogon</span> <!-- Added background color -->
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
