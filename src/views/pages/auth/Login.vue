<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const checked = ref(false);
</script>

<!-- <template>
    <div class="background bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, #87CEFA 10%, rgba(135, 206, 250, 0) 30%)">
                <div class="card1 w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 shadow-md" style="border-radius: 53px;">
                    <div class="text-center mb-8">
                        <img src="/demo/images/logo.png" class="mb-8 w-16 shrink-0 mx-auto">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome to Blu Drop!</div>
                        <span class="text-muted-color font-medium">Sign in to continue</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8" v-model="email" />

                        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</span>
                        </div>
                        <Button label="Sign In" severity="info" class="w-full" as="router-link" to="/user/dashboard"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="flex min-w-[100vw] min-h-screen overflow-hidden justify-center items-center" style="background-color: #d6eaf8;">
        <div style="border-radius: 20px; padding: 0.3rem; background: linear-gradient(180deg, #87CEFA 10%, rgba(135, 206, 250, 0) 30%)">
            <div class="flex flex-col md:flex-row w-full max-w-4xl">
                <div class="flex-1 flex items-center justify-center">
                    <img src="/demo/images/bg.jpg" alt="Welcome" class="w-full h-full object-cover rounded-l-[20px] shadow-md" />
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <div class="card1 w-full bg-surface-0 dark:bg-surface-900 py-10 px-8 sm:px-12 shadow-md" style="border-radius: 0 20px 20px 0;"> <!-- Adjusted padding here -->
                        <div class="text-center mb-6">
                            <img src="/demo/images/logo.png" class="mb-6 w-16 shrink-0 mx-auto">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome to Blu Drop!</div>
                            <span class="text-muted-color font-medium">Sign in to continue</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-6" v-model="email" /> 

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full md:w-[30rem] mb-4" fluid :feedback="false"></Password> 

                            <div class="flex items-center justify-between mt-2 mb-6 gap-8">
                                <div class="flex items-center">
                                    <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                    <label for="rememberme1">Remember me</label>
                                </div>
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</span>
                            </div>
                            <Button label="Sign In" severity="info" class="w-full" as="router-link" to="/user/dashboard"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
}

.max-w-4xl {
    max-width: 1024px;
}

</style>


<!-- 
<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.background {
    background-image: url('https://urbanoasis.la/wp-content/uploads/2021/01/pexels-pixabay-416528.jpg?x62131');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
}

.card1 {
    backdrop-filter: blur(2px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}


</style> -->
