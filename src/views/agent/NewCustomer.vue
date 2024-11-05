<script setup>
import { ref } from 'vue';

// Form data
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);

// Toggle password visibility
const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);

// Handle form submission
const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  alert("Account created successfully!");
};
</script>

<template>
  <div class="space">
    <h1 class="text-2xl md:text-4xl font-bold mb-6 text-gray-500">Create Account</h1>
  </div>

  <div class="card p-8 shadow-lg">
    <form @submit.prevent="handleSubmit">
      <!-- Username -->
      <div class="mb-4">
        <label for="username" class="block text-gray-600 font-bold mb-2">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your username"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Area -->
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-bold mb-2">Area</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your area"
          required
        />
      </div>

      <!-- Password -->
      <div class="mb-4 relative">
        <label for="password" class="block text-gray-600 font-bold mb-2">Password</label>
        <input
          :type="passwordVisible ? 'text' : 'password'"
          id="password"
          v-model="password"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          required
        />
        <!-- Eye icon -->
        <span
          class="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          @click="passwordVisible = !passwordVisible"
        >
          <i :class="passwordVisible ? 'pi pi-eye-slash' : 'pi pi-eye'" class="text-gray-500"></i>
        </span>
      </div>

      <!-- Confirm Password -->
      <div class="mb-4 relative">
        <label for="confirmPassword" class="block text-gray-600 font-bold mb-2">Confirm Password</label>
        <input
          :type="confirmPasswordVisible ? 'text' : 'password'"
          id="confirmPassword"
          v-model="confirmPassword"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
          required
        />
        <!-- Eye icon -->
        <span
          class="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          @click="confirmPasswordVisible = !confirmPasswordVisible"
        >
          <i :class="confirmPasswordVisible ? 'pi pi-eye-slash' : 'pi pi-eye'" class="text-gray-500"></i>
        </span>
      </div>

      <!-- Agree to Terms -->
      <div class="mb-6">
        <label class="inline-flex items-center">
          <input
            type="checkbox"
            v-model="agreeTerms"
            class="form-checkbox h-4 w-4 text-blue-600"
            required
          />
          <span class="ml-2 text-gray-600">I agree to the <a href="#" class="text-blue-600 underline">Terms and Conditions</a></span>
        </label>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Create Account
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background-color: white;
  border-radius: 10px;
  width: 100%; /* Expand to full width */
  height: 550px; /* Set the height to be taller */
}

.relative {
  position: relative;
}

input {
  padding-right: 3rem; /* Make room for the icon */
}

span {
  right: 1rem; /* Adjust the icon positioning */
  top: 2rem;
}
</style>
