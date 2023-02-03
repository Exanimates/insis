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
  import { divisDict } from '@/dict/suggestionsDict'

  const props = defineProps({
    type: {
      type: Number,
      required: true,
      default: 0
    }
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

    const result = await api.query(request);
    issueBy.value = result.suggestions;

    for (const issue of issueBy.value) {
      issue.data.type = divisDict[props.type]
    }
  } 
</script>
