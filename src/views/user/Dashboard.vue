<script setup>
import { useLayout } from "@/layout/composables/layout";
import { onBeforeMount, ref } from 'vue';

const { getPrimary, getSurface, isDarkTheme } = useLayout();
const dateFrozen = ref(false);

// Manually populated mock data for customers2
const customers2 = ref([
  {
    activity: 10,
    representative: { name: '5' },
    amountPaid: '₱ 500.00',
    date: '2024-10-12'
  },
  {
    activity: 15,
    representative: { name: '2' },
    amountPaid: '₱ 750.00',
    date: '2024-10-11'
  },
  {
    activity: 8,
    representative: { name: '3' },
    amountPaid: '₱ 400.00',
    date: '2024-10-10'
  }
]);


function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}
</script>

<template>
  <div class="space">
    <h1 class="text-4xl font-bold mb-6" style="color: #899499;">Dashboard</h1>
  </div>

  <div class="card shadow-md  ">
    <div>
      <ul class="list-none p-0 m-0">
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-blue-100 p-4 rounded-md" style="font-size: 18px;">
          
          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Area :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">Guadalupe</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Agent :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">Zeke</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-green-100 p-4 rounded-md" style="font-size: 18px;">

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Gallons on Hold :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">50</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Date :</span>
          </div>

          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">02/11/2020</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-12 bg-yellow-100 p-4 rounded-md" style="font-size: 18px;">

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Purchase Gallons:</span>
          </div>

          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">16</span>
          </div>

        </li>


        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-pink-100 p-4 rounded-md" style="font-size: 18px;">
          
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Amount Paid :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(16) }}</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-indigo-100 p-4 rounded-md" style="font-size: 18px;">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Amount Payable :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(20) }}</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-purple-100 p-4 rounded-md" style="font-size: 18px;">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Paid :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(20) }}</span>
          </div>
        </li>

      </ul>
    </div>
  </div>


  <!-- DataTable Card for Customers -->
  <div class="card shadow-md">
    <ToggleButton v-model="dateFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Date" offLabel="Date" />

    <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
      <Column field="activity" header="Purchase Gallons" style="min-width: 200px"></Column>
      <Column field="representative.name" header="Gallons Collected" style="min-width: 200px"></Column>
      <Column field="amountPaid" header="Amount Paid" :body="formatCurrency" style="min-width: 200px"></Column>
      <Column field="date" header="Date" style="min-width: 200px" alignFrozen="right" :frozen="dateFrozen"></Column>
    </DataTable>
  </div>
</template>
