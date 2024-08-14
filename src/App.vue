<script setup lang="ts">
import { ref } from 'vue';

const checked = ref();
</script>
<template>
  <div>
    <v-checkbox :value="123" v-model="checked" label="hello world" />
    <p>Checked value: {{ checked ?? 'undefined' }}</p>
  </div>
</template>
