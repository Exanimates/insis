<template>
  <div class="fms">
    <v-text-field
      placeholder="Placeholder"
      @input="event => handleInput(event.target.value)"
    ></v-text-field>
    <EasyDataTable
      buttons-pagination
      :headers="headers"
      :items="issueBy"
      :rowsPerPage="5"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import api from '../api/api'
  import { Suggestions } from '@/types/apiTypes'

  const props = defineProps({
    type: Number
  })

  const headers = [
      {
        text: 'Код подразделения',
        align: 'start',
        value: 'data.code',
      },
      { text: 'Название', value: 'value' },
      { text: 'Код региона', value: 'data.region_code' },
      { text: 'Вид подразделения', value: 'data.type' }];
      
  let issueBy = ref<Suggestions[]>([])
  
  const handleInput = async (value: string) => {
    const request = {
      "query": value,
      "filters": [
        {
            "type": props.type
        }
      ]
    };

    const res = await api.query(request);
    issueBy.value = res.suggestions;
  } 
</script>
