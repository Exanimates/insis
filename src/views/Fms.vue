<template>
  <div class="fms">
    <SearchByType :type="Division.Fms"></SearchByType>
  </div>
</template>

<script lang="ts" setup>
  import SearchByType from '@/components/SearchByType.vue'
  import Division from '@/enums/divisions'
</script>
