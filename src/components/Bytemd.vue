<script setup lang="ts">
import { ref } from 'vue'
import gfm from '@bytemd/plugin-gfm'

let content = ref('')

const plugins = [gfm()]

const handleChange = (v: string) => {
  content.value = v
  console.log(v);

}
</script>

<template>
  <main>
    <Editor :value="content" :plugins="plugins" @change="handleChange" />
  </main>
</template>

<style>
</style>
