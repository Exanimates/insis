<template>
  <div class="uvdOrOvd">
    <SearchByType :type="Division.UvdOrOvd"></SearchByType>
  </div>
</template>

<script lang="ts" setup>
  import SearchByType from '@/components/SearchByType.vue'
  import Division from '@/enums/divisions'
</script>
