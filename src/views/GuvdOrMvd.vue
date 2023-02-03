<template>
  <div class="guvdOrMvd">
    <SearchByType :type="Division.GuvdOrMvd"></SearchByType>
  </div>
</template>

<script lang="ts" setup>
  import SearchByType from '@/components/SearchByType.vue'
  import Division from '@/enums/divisions'
</script>
