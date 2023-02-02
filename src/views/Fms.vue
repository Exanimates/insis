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

<script lang="ts" setup>
  interface Data {
    code: string;
    name: string;
    region_code: string;
    type: string;
  }

  interface Suggestions {
    value: string,
    unrestricted_value: string,
    data: Data
  }

  interface Aggregate {
    suggestions: Suggestions[]
  }
  import { onMounted, ref, reactive } from 'vue'
  import api from '../api/api'

  interface Data {
    code: string;
    name: string;
    region_code: string;
    type: string;
  }

  interface Suggestions {
    value: string,
    unrestricted_value: string,
    data: Data
  }

  interface Aggregate {
    suggestions: Suggestions[]
  }

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
  
  let suggestion = ref<Suggestions[]>([]);

  const handleInput = async (value: string) => {
    const request = {
      "query": value,
    };
    const res = await api.query(request);
    issueBy.value = res.suggestions;
  } 
</script>
