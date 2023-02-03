<template>
  <div class="police">
    <SearchByType :type="Division.Police"></SearchByType>
  </div>
</template>

<script lang="ts" setup>
  import SearchByType from '@/components/SearchByType.vue' 
  import Division from '@/enums/divisions'
</script>
